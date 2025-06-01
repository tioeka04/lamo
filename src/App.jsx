import { useState ,useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mgcrgyyvinxryjiayimw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nY3JneXl2aW54cnlqaWF5aW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Mzk4NDMsImV4cCI6MjA2MzIxNTg0M30.u_iplRaExwtw1_vLD9-Ok54La_lCHY7XisZwKRLVmBI')
function App() {
  useEffect(() => {
    API()
  }, []);

  async function API() {
    const { data, error } = await supabase
          .from('todos')
          .select()
    console.log(data)
  }

  function APIManual() {
    fetch("https://mgcrgyyvinxryjiayimw.supabase.co/rest/v1/todos", {
      method: 'GET',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nY3JneXl2aW54cnlqaWF5aW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Mzk4NDMsImV4cCI6MjA2MzIxNTg0M30.u_iplRaExwtw1_vLD9-Ok54La_lCHY7XisZwKRLVmBI',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nY3JneXl2aW54cnlqaWF5aW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Mzk4NDMsImV4cCI6MjA2MzIxNTg0M30.u_iplRaExwtw1_vLD9-Ok54La_lCHY7XisZwKRLVmBI',
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  return (
    <>
    </>
  )
}

export default App