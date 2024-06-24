  function showDivs(option) {
    if (option === 'first') {
      document.getElementById('container3').style.display = 'flex';
      document.getElementById('container4').style.display = 'none';
    } else {
      document.getElementById('container3').style.display = 'none';
      document.getElementById('container4').style.display = 'flex';
    }
  }

  function selectBox(boxId) {
    let boxes = document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove('selected');
    }
    document.getElementById(boxId).classList.add('selected');
  }
  function product(){
    window.location.href = 'http://127.0.0.1:5500/product.html'
  }

//   // Initialize Supabase client
// const supabase = supabase.createClient('https://veqqfdfxcrzflhdzjpjj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcXFmZGZ4Y3J6ZmxoZHpqcGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NTg5MzYsImV4cCI6MjAxNTAzNDkzNn0.CkP8BTUxEA-bR5USQqe8rjFPhLZFP6oHTMYgbSIkQ9s');

// // Function to insert data into 'air_quality_data' table
// async function insertData(date, time, location, gasDetected) {
//   const { data, error } = await supabase.from('air_quality_data').insert([
//     { date, time, readings }
//   ]);

//   if (error) {
//     console.error('Error inserting data:', error.message);
//     return null;
//   }

//   return data;
// }

// // Function to update data in 'air_quality_data' table
// async function updateData(id, date, time,readings) {
//   const { data, error } = await supabase
//     .from('air_quality_data')
//     .update({ date, time,readings })
//     .match({ id });

//   if (error) {
//     console.error('Error updating data:', error.message);
//     return null;
//   }

//   return data;
// }

// // Function to delete data from 'air_quality_data' table
// async function deleteData(id) {
//   const { error } = await supabase.from('air_quality_data').delete().match({ id });

//   if (error) {
//     console.error('Error deleting data:', error.message);
//     return false;
//   }

//   return true;
// }

// // Function to query data from 'air_quality_data' table
// async function queryData() {
//   const { data, error } = await supabase.from('air_quality_data').select('*');

//   if (error) {
//     console.error('Error querying data:', error.message);
//     return null;
//   }

//   return data;
// }
