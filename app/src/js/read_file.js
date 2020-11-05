const fs = require('fs');
const readline = require('readline');

async function read_data(fn, students, exams) {

    // Create a "vector" which actually is a 2D array
    // Initialize it first
    var exam_students = [];
    // Fill it with empty arrays
    // For 5 exams, we need 6 arrays (0-5)
    for (i = 0; i <= exams; i++) {
        exam_students[i] = [];
    }
    //console.log(exam_students);

    // Read file
    const fileStream = fs.createReadStream(fn, 'utf8');
    // Handle file reading errors
    fileStream.on('error', function(){
        console.log("Could not open file: " + fn);
    });

    // Get all the lines
    // From documentation https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    // Initialize the student number
    var student_id = 0;

    // Go through each line
    for await (const line of rl) {

        // Check if line is empty
        if (line.length = 0 || line.length < 0) {
            continue;
        }

        // Move to the next student
        student_id++;

        // Separate each number per line
        // split() assigns each character into a position of an array
        // In this case the array will be exam_id[]
        var exam_id = line.split(' ');

        // Each line will be successively available here as `line`.
        // console.log("Line from file: " + line);
        // console.log(student_id);

        // Now we will loop to each exam
        for (i = 0; i <= exam_id.length-1; i++) {
            // We will assign the student ids to each exam into the exam_students array
            exam_students[exam_id[i]].push(student_id);
            console.log("Student " + student_id + " is enrolled in exam " + exam_id[i]);
        }

    };

    console.log("#################################");

    // Loop through each exam
    for (i = 1; i <= exams; i++) {
        // And print each student id per exam
        process.stdout.write("Exam " + i +  " Enrolled students: ");
            for (j=0; j <= exam_students[i].length-1; j++){
                process.stdout.write(exam_students[i][j] + " ");
            }
            process.stdout.write("\n");
    };

};

read_data("../../datasets/toy_e5_s6.stu", 6, 5);