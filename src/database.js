import mongoose from "mongoose"

export async function connect(params) {
  try {
    await mongoose.connect('mongodb://localhost/graphql', { useNewUrlParser: true })  
    console.log('\ue7a4 DB is connected');
  } catch(error) {
    console.log(`\uf12a \uf12a \uf12a \uf12a \uf12a \uf12a \uf12a \n${error}`);
  }
}