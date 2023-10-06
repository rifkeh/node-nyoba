const { pool } = require('../config/database');

const getAllPendaftaran = async () => {
  const connection = await pool.getConnection()
  try {
    const [pendaftaran] = await connection.query('SELECT * FROM pendaftaran')
    return pendaftaran
  } catch (error) {
    console.error(error)
    return error
  } finally {
    connection.release()
  }  
}


const createPendaftaran = async (pendaftaran) => {
  const connection = await pool.getConnection()
  try {
    // const passwordHashed = await bcrypt.hash(pendaftaran.password, 10)
    const createdPendaftaran = await connection.query('INSERT INTO pendaftaran (id, nama, email, jenis_konseling, pilihan_dokter) VALUES (?, ?, ?, ?, ?)', [pendaftaran.id, pendaftaran.nama, pendaftaran.email, pendaftaran.jenis_konseling, pendaftaran.pilihan_dokter, pendaftaran.dob]
    );
    const Pendaftaran = [pendaftaran]
  return Pendaftaran
  } catch (error) {
    return error
  } finally {
    connection.release()
  }
}

const getPendaftaranById = async (id) => {
  const connection = await pool.getConnection()
  try {
    const [pendaftaran] = await connection.query('SELECT * FROM pendaftaran WHERE id = ? LIMIT 1', [id])
    if (!pendaftaran) {
      return null; // or any other appropriate response
    }
    return pendaftaran[0];
  } catch (error) {
    return error;
  } finally {
    connection.release()
  }
}


module.exports = { getAllPendaftaran, createPendaftaran, getPendaftaranById }