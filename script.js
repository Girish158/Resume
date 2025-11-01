< !DOCTYPE html >
  <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume | Sahana N Reddy</title>

          <style>
/* Global Styles */
            body {
              font - family: Arial, sans-serif;
            background: #eef3ff;
            margin: 0;
            padding: 0;
            animation: fadeIn 0.6s ease-in;
}

            /* Header */
            header {
              text - align: center;
            background: #375a9e;
            padding: 22px;
            color: white;
            border-bottom: 5px solid #2c4a82;
}

            /* Photo Section */
            .photo-box {
              text - align: center;
            padding: 20px;
}

            #photoPreview {
              width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #375a9e;
            box-shadow: 0 0 12px rgba(0,0,0,0.2);
            transition: transform 0.3s;
}
            #photoPreview:hover {
              transform: scale(1.07);
}

            /* Resume Card Box */
            .resume-section {
              width: 90%;
            max-width: 850px;
            margin: auto;
            background: #fff;
            padding: 22px;
            margin-bottom: 20px;
            border: 2px solid #dbe4ff;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}

            /* Section Headings */
            h2 {
              color: #375a9e;
            margin-bottom: 10px;
            font-size: 22px;
            border-left: 4px solid #375a9e;
            padding-left: 8px;
}

            /* Table */
            table {
              width: 100%;
            border-collapse: collapse;
}
            th, td {
              padding: 10px;
            border: 1px solid #cdd7f5;
}

            /* Lists */
            ul {
              margin: 0;
            padding-left: 18px;
}

            /* Footer */
            footer {
              text - align: center;
            padding: 14px;
            background: #375a9e;
            color: #fff;
            font-size: 14px;
}

            /* Animations */
            @keyframes fadeIn {
              from {opacity: 0;}
            to {opacity: 1;}
}
          </style>
        </head>

        <body>

          <header>
            <h1>Sahana N Reddy — Resume</h1>
          </header>

          <div class="photo-box">
            <img id="photoPreview" src="https://via.placeholder.com/150" alt="Profile Photo"><br><br>
              <input type="file" id="photoUpload" accept="image/*">
              </div>

              <!-- Personal Info -->
              <div class="resume-section">
                <h2>Personal Information</h2>
                <p><b>Name:</b> Sahana N Reddy</p>
                <p><b>Address:</b> Chintamani, Chikkaballapura, Karnataka - 563125</p>
                <p><b>Email:</b> sahananreddy2005@gmail.com</p>
                <p><b>Phone:</b> +91 63647 31619</p>
              </div>

              <!-- Education -->
              <div class="resume-section">
                <h2>Education</h2>
                <table>
                  <tr><th>Degree</th><th>Institution</th><th>Year</th></tr>
                  <tr><td>B.E in Computer Science</td><td>GCEM, Bengaluru</td><td>2027</td></tr>
                  <tr><td>PUC</td><td>Vivekananda PU College</td><td>2023</td></tr>
                </table>
              </div>

              <!-- Skills -->
              <div class="resume-section">
                <h2>Skills</h2>
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>React.js, Node.js</li>
                  <li>Python, Java</li>
                  <li>Communication, Teamwork</li>
                </ul>
              </div>

              <!-- Projects -->
              <div class="resume-section">
                <h2>Projects</h2>
                <ul>
                  <li>Exam Seating Arrangement System</li>
                  <li>Twitter Sentiment Analysis (NLP)</li>
                </ul>
              </div>

              <!-- Experience -->
              <div class="resume-section">
                <h2>Work Experience</h2>
                <p>Fresher</p>
              </div>

              <footer>
                © 2025 Sahana N Reddy — All Rights Reserved
              </footer>

              <script>
                document.getElementById("photoUpload").addEventListener("change", function(e){
                  let file = e.target.files[0];
                if(file){
                  let imgURL = URL.createObjectURL(file);
                document.getElementById("photoPreview").src = imgURL;
    }
});
              </script>

            </body>
            </html>
