// ANSI formatting for console output
const BOLD = '\x1b[1m';
const UNDERLINE = '\x1b[4m';

const BRIGHT_BLACK = '\x1b[90m';
const BRIGHT_RED = '\x1b[91m';
const BRIGHT_GREEN = '\x1b[92m';
const BRIGHT_YELLOW = '\x1b[93m';
const BRIGHT_BLUE = '\x1b[94m';
const BRIGHT_PURPLE = '\x1b[95m';
const BRIGHT_CYAN = '\x1b[96m';
const BRIGHT_WHITE = '\x1b[97m';
const BRIGHT_LIME = '\x1b[92m'; // Lime is closest to bright green
const BRIGHT_ORANGE = '\x1b[38;5;214m'; // ANSI code for orange-like color
const BRIGHT_DARK_RED = '\x1b[38;5;88m'; // Dark red

const RESET = '\x1b[0m';

// College list data
const collegeList = [
    // ["School Name", "Acceptance Rate", "ED Deflator", "EA Deflator", "REA/Private/Public"]
    ["Columbia University", "0.02", "1.9", "N", "P"],
    ["Stanford University", "0.03", "N", "1.3", "REA"],
    ["University of Pennsylvania", "0.03", "2.3", "N", "P"],
    ["California Institute of Technology (Caltech)", "0.03", "N", "1.1", "REA"],
    ["Princeton University", "0.06", "N", "1.3", "REA"],
    ["Massachusetts Institute of Technology (MIT)", "0.06", "N", "1.2", "P"],
    ["Yale University", "0.07", "N", "1.3", "REA"],
    ["Harvard University", "0.08", "N", "1.3", "REA"],
    ["University of Chicago", "0.08", "2.5", "1.3", "P"],
    ["Johns Hopkins University", "0.05", "1.7", "N", "P"],
    ["Dartmouth College", "0.09", "2.3", "N", "P"],
    ["Brown University", "0.09", "2.0", "N", "P"],
    ["Duke University", "0.10", "2.0", "N", "P"],
    ["Northwestern University", "0.12", "2.2", "N", "P"],
    ["Vanderbilt University", "0.12", "2.1", "N", "P"],
    ["Rice University", "0.13", "1.8", "N", "P"],
    ["Cornell University", "0.18", "2.2", "N", "P"],
    ["University of Notre Dame", "0.18", "N", "1.2", "REA"],
    ["University of Michigan", "0.18", "N", "1.3", "PUB"],
    ["University of California, Berkeley", "0.15", "N", "N", "PUB"],
    ["University of California, Los Angeles (UCLA)", "0.20", "N", "N", "PUB"],
    ["CUNY Macaulay Honors College", "0.20", "N", "N", "PUB"],
    ["Emory University", "0.14", "1.7", "N", "P"],
    ["Georgetown University", "0.25", "N", "1.3", "REA"],
    ["University of Southern California (USC)", "0.17", "N", "1.3", "P"],
    ["University of Virginia (UVA)", "0.15", "N", "1.3", "PUB"],
    ["University of North Carolina Chapel-Hill", "0.24", "N", "1.4", "PUB"],
    ["Tufts University", "0.12", "2.0", "N", "P"],
    ["New York University (NYU)", "0.22", "1.5", "1.3", "P"],
    ["Wake Forest University", "0.20", "2.1", "N", "P"],
    ["University of Rochester", "0.35", "1.7", "N", "P"],
    ["Boston College", "0.24", "1.8", "1.2", "P"],
    ["Georgia Institute of Technology", "0.16", "N", "1.4", "PUB"],
    ["University of Texas at Austin", "0.30", "N", "1.2", "PUB"],
    ["University of Wisconsin-Madison", "0.30", "N", "1.1", "PUB"],
    ["University of California, San Diego (UCSD)", "0.40", "N", "N", "PUB"],
    ["University of California, Davis", "0.40", "N", "N", "PUB"],
    ["Villanova University", "0.35", "2.5", "1.2", "P"],
    ["University of Illinois Urbana-Champaign", "0.32", "N", "1.2", "PUB"],
    ["University of California, Santa Barbara", "0.35", "N", "N", "PUB"],
    ["Pennsylvania State University", "0.45", "N", "1.1", "PUB"],
    ["University of Miami", "0.40", "1.5", "1.2", "P"],
    ["Ohio State University", "0.50", "N", "1.1", "PUB"],
    ["University of Maryland", "0.45", "N", "1.2", "PUB"],
    ["Purdue University", "0.55", "N", "N", "PUB"],
    ["University of Washington", "0.45", "N", "N", "PUB"],
    ["University of Pittsburgh", "0.55", "N", "1.1", "PUB"],
    ["Syracuse University", "0.60", "N", "N", "P"],
    ["Texas A&M University", "0.55", "N", "1.1", "PUB"],
    ["Indiana University Bloomington", "0.60", "N", "1.1", "PUB"],
    ["University of Connecticut", "0.70", "N", "1.2", "PUB"],
    ["University of Georgia", "0.50", "N", "1.2", "PUB"],
    ["Michigan State University", "0.65", "N", "N", "PUB"],
    ["Rutgers University", "0.70", "N", "N", "PUB"],
    ["University of Colorado Boulder", "0.55", "N", "1.1", "PUB"],
    ["Clemson University", "0.55", "N", "N", "PUB"],
    ["Virginia Tech", "0.60", "N", "1.1", "PUB"],
    ["University of Iowa", "0.65", "N", "N", "PUB"],
    ["University of Minnesota Twin Cities", "0.60", "N", "1.1", "PUB"],
    ["University of Delaware", "0.60", "N", "1.1", "PUB"],
    ["University of Massachusetts Amherst", "0.65", "N", "1.1", "PUB"],
    ["American University", "0.50", "N", "1.2", "P"],
    ["Baylor University", "0.50", "N", "1.2", "P"],
    ["Marquette University", "0.60", "N", "N", "P"],
    ["University of Denver", "0.55", "N", "1.1", "P"],
    ["Stevens Institute of Technology", "0.45", "1.8", "N", "P"],
    ["Lehigh University", "0.40", "2.1", "N", "P"],
    ["University of California, Irvine", "0.35", "N", "N", "PUB"],
    ["University of San Diego", "0.50", "N", "1.1", "P"],
    ["Texas Christian University", "0.50", "N", "1.1", "P"],
    ["University of Arizona", "0.65", "N", "N", "PUB"],
    ["Pepperdine University", "0.55", "N", "1.1", "P"],
    ["Yeshiva University", "0.60", "N", "N", "P"],
    ["Creighton University", "0.60", "N", "1.1", "P"],
    ["Colorado School of Mines", "0.50", "N", "1.1", "PUB"],
    ["University of San Francisco", "0.65", "N", "1.1", "P"],
    ["Loyola Marymount University", "0.60", "N", "1.1", "P"],
    ["Drexel University", "0.55", "N", "1.1", "P"],
    ["University of California, Riverside", "0.50", "N", "N", "PUB"],
    ["Binghamton University (SUNY)", "0.70", "N", "1.3", "PUB"],
    ["Stony Brook University (SUNY)", "0.75", "N", "1.3", "PUB"],
    ["Florida State University", "0.7", "N", "1.1", "PUB"],
    ["Fordham University", "0.60", "N", "1.2", "P"],
    ["Hunter College (CUNY)", "0.70", "N", "N", "PUB"],
    ["University at Albany (SUNY)", "0.68", "N", "N", "PUB"],
    ["Hofstra University", "0.60", "N", "1.1", "P"],
    ["Ithaca College", "0.55", "N", "1.2", "P"],
    ["University at Buffalo (SUNY)", "0.87", "N", "1.2", "PUB"]
];

// Required modules
const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to read user input
const askQuestion = (query) => new Promise(resolve => rl.question(query, ans => resolve(ans.trim())));

// Main function to run the simulator
(async function main() {
    let gpa = -1.0;
    let sat = -1;
    let act = -1;
    let testOptional = false;
    let name = null;
    let extracurriculars = -1;
    let ap_courses = -1;
    let essay_strength = -1;
    let gender = -1;
    let race = -1;
    let firstGen = false;

    console.log(BOLD + "Welcome to the College Application Simulator!" + RESET);
    console.log();
    console.log("[NOTE]: This is designed for NY applicants at Stuyvesant High School.");
    console.log("[DISCLAIMER]: Don't get too mad if the results do not perfectly match reality. The data is based on trends and probabilities specific to Stuyvesant students, but admissions can always surprise you!");
    console.log();
    console.log("Click any button to begin your journey!");
    await askQuestion('');

    // Name input
    while (!name || name.trim() === '') {
        name = await askQuestion("What is your full name?\n");
        console.log();
        if (!name || name.trim() === '') {
            console.log("Invalid name. Please enter your name.\n");
        } else {
            console.log(`Welcome, ${name}!\n`);
        }
    }

    // GPA input
    while (gpa < 65.0 || gpa > 100.0 || isNaN(gpa)) {
        let gpaInput = await askQuestion("What is your GPA on a 100 point scale?\n");
        gpa = parseFloat(gpaInput);
        console.log();
        if (isNaN(gpa) || gpa < 65.0 || gpa > 100.0) {
            console.log("Invalid GPA. Please enter a value between 65 and 100.\n");
            gpa = -1;
        }
    }

    // Test Optional
    let response = await askQuestion("Are you applying test-optional? (yes/no)\n");
    console.log();
    if (response.toLowerCase() === 'yes') {
        testOptional = true;
        console.log("You have chosen test-optional mode. SAT/ACT score is not required.\n");
    } else {
        // Ask the user to choose between SAT or ACT
        let testChoice = await askQuestion("Will you be submitting SAT or ACT scores? (Enter 'SAT', 'ACT', or 'neither')\n");
        console.log();
        if (testChoice.toLowerCase() === 'sat') {
            // SAT input loop
            while (sat < 400 || sat > 1600 || sat % 10 !== 0 || isNaN(sat)) {
                let satInput = await askQuestion("What is your highest SAT score/SAT superscore?\n");
                sat = parseInt(satInput);
                console.log();
                if (isNaN(sat) || sat < 400 || sat > 1600 || sat % 10 !== 0) {
                    console.log("Invalid SAT score. Please enter a valid score between 400 and 1600, in intervals of 10.\n");
                    sat = -1;
                }
            }
        } else if (testChoice.toLowerCase() === 'act') {
            // ACT input loop
            while (act < 1 || act > 36 || isNaN(act)) {
                let actInput = await askQuestion("What is your highest ACT composite score?\n");
                act = parseInt(actInput);
                console.log();
                if (isNaN(act) || act < 1 || act > 36) {
                    console.log("Invalid ACT score. Please enter a valid score between 1 and 36.\n");
                    act = -1;
                }
            }
        } else if (testChoice.toLowerCase() === 'neither') {
            testOptional = true;
            console.log("You have chosen not to submit SAT or ACT scores. Test-optional mode enabled.\n");
        } else {
            console.log("Invalid choice. Please restart and select 'SAT', 'ACT', or 'neither'.\n");
            process.exit(0);
        }
    }

    // Extracurriculars
    while (extracurriculars < 0 || extracurriculars > 10 || isNaN(extracurriculars)) {
        let ecInput = await askQuestion("On a scale of 0 to 10, how would you rate the strength of your extracurricular activities?\n");
        extracurriculars = parseFloat(ecInput);
        console.log();
        if (isNaN(extracurriculars) || extracurriculars < 0 || extracurriculars > 10) {
            console.log("Invalid extracurricular value. Please enter a value between 0 and 10.\n");
            extracurriculars = -1;
        }
    }

    // AP Courses
    while (ap_courses < 0 || isNaN(ap_courses)) {
        let apInput = await askQuestion("How many AP courses have you taken? (Including those you are currently taking)\n");
        ap_courses = parseInt(apInput);
        console.log();
        if (isNaN(ap_courses) || ap_courses < 0) {
            console.log("Invalid amount of AP courses. Please enter a value 0 or above.\n");
            ap_courses = -1;
        }
    }

    // Essay Strength
    while (essay_strength < 0 || essay_strength > 10 || isNaN(essay_strength)) {
        let essayInput = await askQuestion("On a scale of 0 to 10, how would you rate the strength of your essays?\n");
        essay_strength = parseFloat(essayInput);
        console.log();
        if (isNaN(essay_strength) || essay_strength < 0 || essay_strength > 10) {
            console.log("Invalid essay strength value. Please enter a value between 0 and 10.\n");
            essay_strength = -1;
        }
    }

    // Gender
    while (gender < 1 || gender > 3 || isNaN(gender)) {
        console.log("What is your gender?");
        console.log("- Enter 1 if you identify as male.");
        console.log("- Enter 2 if you identify as female.");
        console.log("- Enter 3 if you identify as other.");
        let genderInput = await askQuestion('');
        gender = parseInt(genderInput);
        console.log();
        if (isNaN(gender) || gender < 1 || gender > 3) {
            console.log("Invalid gender value. Please enter either 1, 2, or 3.\n");
            gender = -1;
        }
    }

    // Race
    while (race < 1 || race > 9 || isNaN(race)) {
        console.log("What is your race/ethnicity?");
        console.log("- Enter 1 if you are Caucasian.");
        console.log("- Enter 2 if you are African-American.");
        console.log("- Enter 3 if you are Hispanic or Latino.");
        console.log("- Enter 4 if you are Asian.");
        console.log("- Enter 5 if you are Native American or Alaskan Native.");
        console.log("- Enter 6 if you are Pacific Islander.");
        console.log("- Enter 7 if you identify as Middle Eastern or North African.");
        console.log("- Enter 8 if you prefer not to say.");
        console.log("- Enter 9 if you do not see your race/ethnicity listed here.");
        let raceInput = await askQuestion('');
        race = parseInt(raceInput);
        console.log();
        if (isNaN(race) || race < 1 || race > 9) {
            console.log("Invalid race value. Please enter an integer value from 1 to 9.\n");
            race = -1;
        }
    }

    // First Generation
    let validFirstGenInput = false;
    while (!validFirstGenInput) {
        let fgInput = await askQuestion("Are you a first-generation college student? (yes/no)\n");
        console.log();
        if (fgInput.toLowerCase() === 'yes') {
            firstGen = true;
            validFirstGenInput = true;
        } else if (fgInput.toLowerCase() === 'no') {
            firstGen = false;
            validFirstGenInput = true;
        } else {
            console.log("Invalid input. Please enter 'yes' or 'no'.\n");
        }
    }

    // Calculations
    let wgpa = weightedGPA(gpa, ap_courses);
    let demScoreValue = demScore(gender, race, firstGen);

    // Print profile
    console.log(`${name.toUpperCase()}'S COLLEGE APPLICATION PROFILE:`);
    console.log(`UW GPA: ${gpa}`);
    console.log(`W GPA: ${wgpa}`);
    if (!testOptional) {
        if (sat !== -1) {
            console.log(`SAT: ${sat}`);
        }
        if (act !== -1) {
            console.log(`ACT: ${act}`);
        }
    }
    console.log(`AP Courses Taken: ${ap_courses}`);
    console.log();
    console.log(`Extracurricular Activities Strength: ${extracurriculars}/10.0 -- ${rate(extracurriculars)}`);
    console.log(`Essay Strength: ${essay_strength}/10.0 -- ${rate(essay_strength)}`);
    console.log();
    console.log(`Gender: ${getGender(gender)}`);
    console.log(`Race: ${getRace(race)}`);
    console.log(`First Generation Student: ${firstGen}`);
    console.log(`Demographics Score: ${demScoreValue}/10.0 -- ${rate(demScoreValue)}`);
    console.log();

    // ED Selection
    let edSchool = -1;
    let reaSchool = -1;
    let eaSchools = [];
    let response2 = await askQuestion("Would you like to apply for Early Decision (ED) to one of the schools? (yes/no)\n");
    console.log();

    if (response2.toLowerCase() === 'yes') {
        console.log("Note: Early Decision is **binding**, meaning you must attend the school if accepted. Please select a school from the list below by typing its corresponding number.\n");

        for (let i = 0; i < collegeList.length; i++) {
            if (collegeList[i][2] !== "N") {
                console.log(`${i}: ${collegeList[i][0]}`);
            }
        }

        console.log();
        let edInput = await askQuestion("Enter the number corresponding to the school you wish to apply ED to (or type '-1' to skip):\n");
        edSchool = parseInt(edInput);
        console.log();

        if (edSchool > -1 && edSchool < collegeList.length) {
            if (collegeList[edSchool][2] !== "N") {
                console.log(`You have chosen to apply Early Decision to ${collegeList[edSchool][0]}.\n`);
            } else {
                console.log(`Invalid choice. ${collegeList[edSchool][0]} does not offer Early Decision.\n`);
                edSchool = -1;
            }
        } else if (edSchool === -1) {
            console.log("You have chosen not to apply Early Decision.\n");
        } else {
            console.log("Invalid selection. Please restart and select a valid number.\n");
            edSchool = -1;
        }
    }

    // REA Selection
    if (edSchool === -1) {
        let response3 = await askQuestion("Would you like to apply under the Restrictive Early Action (REA) program to one of the schools? (yes/no)\n");
        console.log();

        if (response3.toLowerCase() === 'yes') {
            console.log("Note: Applying REA means you cannot apply Early Action (EA) to private schools, but you can apply to public universities.");
            for (let i = 0; i < collegeList.length; i++) {
                if (collegeList[i][4] === "REA") {
                    console.log(`${i}: ${collegeList[i][0]}`);
                }
            }
            console.log();
            let reaInput = await askQuestion("Enter the number corresponding to the school you wish to apply REA to (or type '-1' to skip):\n");
            reaSchool = parseInt(reaInput);
            console.log();

            if (reaSchool > -1 && reaSchool < collegeList.length && collegeList[reaSchool][4] === "REA") {
                console.log(`You have chosen to apply Restrictive Early Action to ${collegeList[reaSchool][0]}.\n`);
            } else if (reaSchool === -1) {
                console.log("You have chosen not to apply under the REA program.\n");
            } else {
                console.log("Invalid selection. Please restart and select a valid REA school.\n");
                reaSchool = -1;
            }
        }

        // EA Selection for Public Schools
        if (reaSchool !== -1) {
            let response4 = await askQuestion("Would you like to apply for Early Action (EA) to any public schools? (yes/no)\n");
            console.log();

            if (response4.toLowerCase() === 'yes') {
                console.log("You can apply EA to the following public universities. Please select schools by typing their corresponding numbers (one at a time).");

                // public schools offering EA
                for (let i = 0; i < collegeList.length; i++) {
                    if (collegeList[i][4] === "PUB" && collegeList[i][3] !== "N" && (reaSchool !== i)) {
                        console.log(`${i}: ${collegeList[i][0]}`);
                    }
                }
                console.log();

                // Prompting for selections until '-1' is entered
                while (true) {
                    let eaSelectionInput = await askQuestion("Enter the number corresponding to the public school you wish to apply EA to (or type '-1' to end your selection):\n");
                    let eaSelection = parseInt(eaSelectionInput);
                    console.log();

                    if (eaSelection === -1) {
                        break; // Exit the loop
                    }

                    if (eaSelection > -1 && eaSelection < collegeList.length && collegeList[eaSelection][3] !== "N" && collegeList[eaSelection][4] === "PUB") {
                        if (!eaSchools.includes(eaSelection)) {
                            eaSchools.push(eaSelection);
                            console.log(`Applied to ${collegeList[eaSelection][0]} (EA).\n`);
                        } else {
                            console.log("You have already applied to this school.\n");
                        }
                    } else {
                        console.log("Invalid choice. Please select a valid public school offering EA.\n");
                    }
                }

                console.log("You have finished selecting your Early Action public schools.\n");

                // Display selected EA public schools
                console.log("You have applied to the following schools:");
                if (reaSchool !== -1) {
                    console.log(`- ${collegeList[reaSchool][0]} (REA)`);
                }
                if (eaSchools.length > 0) {
                    for (let school of eaSchools) {
                        console.log(`- ${collegeList[school][0]} (EA)`);
                    }
                } else {
                    console.log("You did not apply EA to any public universities.");
                }
                console.log();
            }
        }
    }

    // EA selection if ED was picked
    if (reaSchool === -1) {
        let response5 = await askQuestion("Would you like to apply for Early Action (EA) to private non-REA and public schools? (yes/no)\n");
        console.log();

        if (response5.toLowerCase() === 'yes') {
            console.log("You can apply EA to the following private non-REA and public schools. Please select schools by typing their corresponding numbers (multiple selections allowed).");

            for (let i = 0; i < collegeList.length; i++) {
                if (collegeList[i][3] !== "N" && collegeList[i][4] !== "REA" && (edSchool !== i)) {
                    console.log(`${i}: ${collegeList[i][0]}`);
                }
            }
            console.log();

            while (true) {
                let eadSelectionInput = await askQuestion("Enter the number corresponding to the schools you wish to apply EA to (or type '-1' to end your selection):\n");
                let eadSelection = parseInt(eadSelectionInput);
                console.log();

                if (eadSelection === -1) {
                    break; // Exit the loop
                }

                if (eadSelection > -1 && eadSelection < collegeList.length && collegeList[eadSelection][3] !== "N" && collegeList[eadSelection][4] !== "REA") {
                    if (!eaSchools.includes(eadSelection) && (edSchool !== eadSelection)) {
                        eaSchools.push(eadSelection);
                        console.log(`Applied to ${collegeList[eadSelection][0]} (EA).\n`);
                    } else {
                        console.log("You have already applied to this school.\n");
                    }
                } else {
                    console.log("Invalid selection. Please choose a valid school offering EA.\n");
                }
            }

            console.log("You have applied to the following schools:");
            if (edSchool !== -1) {
                console.log(`- ${collegeList[edSchool][0]} (ED)`);
            }
            if (eaSchools.length > 0) {
                for (let school of eaSchools) {
                    console.log(`- ${collegeList[school][0]} (EA)`);
                }
            }
            console.log();
        }
    }

    let collegesApplied = [];
    if (edSchool !== -1) {
        collegesApplied.push([collegeList[edSchool][0], "ED", "0", "null", "0", "false", "false"]);
    } else if (reaSchool !== -1) {
        collegesApplied.push([collegeList[reaSchool][0], "REA", "0", "null", "0", "false", "false"]);
    }

    for (let eaSchool of eaSchools) {
        collegesApplied.push([collegeList[eaSchool][0], "EA", "0", "null", "0", "false", "false"]);
    }

    console.log("Proceeding to the Regular Decision phase. Press any key to continue and view a list of colleges available for application.");
    await askQuestion('');
    console.log();
    console.log("List of Colleges:");
    for (let i = 0; i < collegeList.length; i++) {
        if (isCollegeInList(collegesApplied, collegeList[i][0])) {
            console.log(`${i} : ${collegeList[i][0]} - ALREADY APPLIED`);
        } else {
            console.log(`${i} : ${collegeList[i][0]}`);
        }
    }
    console.log();

    // Regular Decision Applications
    let done = false;
    while (!done) {
        let userInput = await askQuestion("What school would you like to apply to? Type 'help' to find out colleges you can apply to, and type 'done' when you are done.\n");
        console.log();

        if (userInput.toLowerCase() === 'help') {
            console.log();
            console.log("List of Colleges:");
            for (let i = 0; i < collegeList.length; i++) {
                if (isCollegeInList(collegesApplied, collegeList[i][0])) {
                    console.log(`${i} : ${collegeList[i][0]} - ALREADY APPLIED`);
                } else {
                    console.log(`${i} : ${collegeList[i][0]}`);
                }
            }
            console.log();
            continue;
        }

        if (userInput.toLowerCase() === 'done') {
            done = true;
            break;
        }

        let collegeId = parseInt(userInput);
        if (!isNaN(collegeId) && collegeId >= 0 && collegeId < collegeList.length && !isCollegeInList(collegesApplied, collegeList[collegeId][0])) {
            collegesApplied.push([collegeList[collegeId][0], "RD", "0", "null", "0", "false", "false"]);
            console.log(`You have applied to: ${collegeList[collegeId][0]}!\n`);
        } else {
            console.log("Invalid college ID or you have already applied to this college. Please choose a different college.\n");
        }
    }

    console.log("Colleges you have applied to: ");
    for (let application of collegesApplied) {
        application[2] = sim10();
        console.log(`${application[0]} - (${application[1]})`);
    }
    console.log();

    console.log("Press any key to reveal your admission chances and interview strengths for each school.");
    await askQuestion('');
    console.log();

    // Random interviews
    console.log("Your interview strength for each college:");
    for (let application of collegesApplied) {
        console.log(`${application[0]} - (${application[1]}): ${application[2]}/10.0 -- ${rate(parseFloat(application[2]))}`);
    }
    console.log();

    console.log("Your chances and classifications for each college:");
    for (let application of collegesApplied) {
        let chances = chanceCollege(collegeList, findInList(collegeList, application[0]), demScoreValue, testOptional, sat, act, extracurriculars, ap_courses, essay_strength, gpa, parseFloat(application[2]), application[1]);
        console.log(`${application[0]} - (${application[1]}): ${chances}% -- ${getType(chances)}`);
        application[4] = chances.toString();
    }
    console.log();
    console.log(BOLD + "Click any button to view your admissions decisions.");
    await askQuestion('');

    // Admissions Decisions
    for (let i = 0; i < collegesApplied.length; i++) {
        let application = collegesApplied[i];
        if (application[1] === "ED") {
            console.log(`Your decision for ${application[0]} (ED) is out! Press any key to view your admissions decision.`);
            await askQuestion('');
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            let chances = parseFloat(application[4]);
            let result = admissionsDecision(chances, "ED", i, collegesApplied);
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            console.log();
            console.log(BOLD + "All Early Decision application letters have been read. Click any button to advance.");
            await askQuestion('');
            if (result === "D") {
                application[5] = "true";
            }
            application[3] = result;
        }
    }

    for (let i = 0; i < collegesApplied.length; i++) {
        let application = collegesApplied[i];
        if (application[1] === "REA") {
            console.log(`Your decision for ${application[0]} (REA) is out! Press any key to view your admissions decision.`);
            await askQuestion('');
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            let chances = parseFloat(application[4]);
            let result = admissionsDecision(chances, "REA", i, collegesApplied);
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            console.log();
            console.log(BOLD + "All Restrictive Early Action application letters have been read. Click any button to advance.");
            await askQuestion('');
            if (result === "D") {
                application[5] = "true";
            }
            application[3] = result;
        }
    }

    for (let i = 0; i < collegesApplied.length; i++) {
        let application = collegesApplied[i];
        if (application[1] === "EA") {
            console.log(`Your decision for ${application[0]} (EA) is out! Press any key to view your admissions decision.`);
            await askQuestion('');
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            let chances = parseFloat(application[4]);
            let result = admissionsDecision(chances, "EA", i, collegesApplied);
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            console.log();
            if (result === "D") {
                application[5] = "true";
            }
            application[3] = result;
        }
    }
    console.log(BOLD + "All Early Action application letters have been read. Click any button to advance to Regular Decision.");
    await askQuestion('');

    for (let i = 0; i < collegesApplied.length; i++) {
        let application = collegesApplied[i];
        if (application[1] === "RD" || application[3] === "D") {
            console.log(`Your decision for ${application[0]} (RD) is out! Press any key to view your admissions decision.`);
            await askQuestion('');
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            let chances = parseFloat(application[4]);
            let result = admissionsDecision(chances, "RD", i, collegesApplied);
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            console.log();
            if (result === "W") {
                application[6] = "true";
            }
            application[3] = result;
        }
    }
    console.log(BOLD + "All Regular Decision application letters have been read. Click any button to advance to Waitlist decisions.");
    await askQuestion('');

    // Waitlist decisions
    for (let i = 0; i < collegesApplied.length; i++) {
        let application = collegesApplied[i];
        if (application[3] === "W") {
            console.log(`Your waitlist decision for ${application[0]} is out! Press any key to view your admissions decision.`);
            await askQuestion('');
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            let chances = parseFloat(application[4]);
            let result = admissionsDecision(chances, "Waitlist", i, collegesApplied);
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------");
            console.log();
            application[3] = result;
        }
    }
    console.log(BOLD + "All waitlist decision letters have been read. Click any button to advance to school enrollment.");
    await askQuestion('');

    // Final Results
    console.log("Final Results:");
    for (let application of collegesApplied) {
        process.stdout.write(`${application[0]} - (${application[1]}): `);

        // Deferred Status
        if (application[5] === "true") {
            process.stdout.write(`- ${BRIGHT_YELLOW}Deferred ${RESET}`);
        }

        // Waitlisted Status
        if (application[6] === "true") {
            process.stdout.write(`- ${BRIGHT_YELLOW}Waitlisted ${RESET}`);
        }

        // Acceptance Outcomes
        if (application[3] === "ASH") {
            process.stdout.write(`- ${BRIGHT_GREEN}Accepted with Honors & Scholarship${RESET}`);
        } else if (application[3] === "AS") {
            process.stdout.write(`- ${BRIGHT_GREEN}Accepted with Scholarship${RESET}`);
        } else if (application[3] === "A") {
            process.stdout.write(`- ${BRIGHT_GREEN}Accepted${RESET}`);
        }

        // Rejection Outcomes
        if (application[3] === "R") {
            process.stdout.write(`- ${BRIGHT_RED}Rejected${RESET}`);
        }
        console.log();
    }

    let acceptedSchools = [];

    // Populate acceptedSchools list with accepted applications
    for (let application of collegesApplied) {
        if (application[3] === "A" || application[3] === "AS" || application[3] === "ASH") {
            acceptedSchools.push(application);
        }
    }

    // Enrollment
    if (acceptedSchools.length > 0) {
        // Check for ED acceptance
        let enrolledSchool = null;
        for (let application of acceptedSchools) {
            if (application[1].toUpperCase() === "ED") {
                enrolledSchool = application[0];
                break;
            }
        }

        if (enrolledSchool !== null) {
            console.log(`${BRIGHT_GREEN}You have been automatically enrolled at ${enrolledSchool} due to Early Decision acceptance!${RESET}\n`);
        } else {
            console.log("\nEnter the corresponding number of the school you wish to enroll at:");
            for (let i = 0; i < acceptedSchools.length; i++) {
                console.log(`${i + 1}: ${acceptedSchools[i][0]}`);
            }

            let selectedSchoolIndexInput = await askQuestion('');
            let selectedSchoolIndex = parseInt(selectedSchoolIndexInput) - 1;
            if (selectedSchoolIndex >= 0 && selectedSchoolIndex < acceptedSchools.length) {
                console.log(`${BRIGHT_GREEN}You have successfully enrolled at ${acceptedSchools[selectedSchoolIndex][0]}!${RESET}\n`);
            } else {
                console.log(`${BRIGHT_RED}Invalid selection. Please try again.${RESET}\n`);
            }
        }
    } else {
        console.log(`${BRIGHT_RED}Unfortunately, you were not accepted into any of your applied schools.${RESET}`);
        console.log("We recommend enrolling in your local community college as a next step.\n");
    }

    rl.close();
})();

// Helper Functions
function weightedGPA(gpa, ap_courses) {
    let wgpa = gpa;
    let count = ap_courses;
    while (count > 0) {
        wgpa += Math.random() * 0.38;
        count--;
    }
    return Math.round(wgpa * 100.0) / 100.0;
}

function getGender(gender) {
    switch (gender) {
        case 1:
            return "Male";
        case 2:
            return "Female";
        case 3:
            return "Other";
        default:
            return "Unknown";
    }
}

function getRace(race) {
    switch (race) {
        case 1:
            return "Caucasian";
        case 2:
            return "African-American";
        case 3:
            return "Hispanic or Latino";
        case 4:
            return "Asian";
        case 5:
            return "Native American or Alaskan Native";
        case 6:
            return "Pacific Islander";
        case 7:
            return "Middle Eastern or North African";
        case 8:
            return "Prefer not to say";
        case 9:
            return "Other";
        default:
            return "Unknown";
    }
}

function demScore(gender, race, firstGen) {
    let score = 5 + Math.random() * 2 - 1; // Start with a base score of 5

    // Gender-based adjustments
    if (gender === 2 || gender === 3) { // Female or Non-binary
        score += Math.random() * 2.3;
    }

    // First-generation adjustment
    if (firstGen) {
        score += Math.random() * 3;
    }

    // Race-based adjustments
    switch (race) {
        case 1: // Caucasian
            score -= Math.random() * 2;
            break;
        case 2: // African-American
            score += Math.random() * 4.5;
            break;
        case 3: // Hispanic or Latino
            score += Math.random() * 4.5;
            break;
        case 4: // Asian
            score -= Math.random() * 3.5;
            break;
        case 5: // Native American or Alaskan Native
            score += Math.random() * 4;
            break;
        case 6: // Pacific Islander
            score += Math.random() * 3;
            break;
        case 7: // Middle Eastern or North African
            score += Math.random() * 2;
            break;
        case 8: // Prefer not to say
            score -= Math.random() * 1;
            break;
        case 9:
            score += Math.random() * 1.5;
            break;
        default:
            score += 0.0;
            break;
    }

    if (score > 10) return 10.0;
    if (score < 0) return 0.0;

    return Math.round(score * 100) / 100.0;
}

function rate(value) {
    if (value <= 10 && value >= 8.7) {
        return '\x1b[38;5;22m' + "Outstanding" + BRIGHT_WHITE;
    } else if (value >= 7.2) {
        return BRIGHT_GREEN + "Strong" + BRIGHT_WHITE;
    } else if (value >= 6) {
        return BRIGHT_YELLOW + "Moderate" + BRIGHT_WHITE;
    } else if (value >= 4.5) {
        return BRIGHT_ORANGE + "Fair" + BRIGHT_WHITE;
    } else if (value >= 2) {
        return BRIGHT_RED + "Weak" + BRIGHT_WHITE;
    } else if (value >= 0) {
        return BRIGHT_DARK_RED + "Terrible" + BRIGHT_WHITE;
    }
    return BRIGHT_BLACK + "N/A" + BRIGHT_WHITE;
}

function isCollegeInList(collegesApplied, collegeName) {
    for (let application of collegesApplied) {
        if (application[0] === collegeName) {
            return true;
        }
    }
    return false;
}

function sim10() {
    let var1 = Math.random() * 10;
    let var2;

    if (var1 < 1) {
        var2 = Math.random() * 2;
    } else if (var1 < 3) {
        var2 = Math.random() * 5.5;
    } else if (var1 < 5) {
        var2 = Math.random() * 9;
    } else if (var1 < 7) {
        var2 = 2 + Math.random() * 8;
    } else if (var1 < 9) {
        var2 = 3 + Math.random() * 8;
    } else {
        var2 = 9 + Math.random() * 1.2;
    }

    if (var2 > 10) {
        var2 = 10.0;
    }
    if (var2 < 5) {
        if (var2 <= 1) {
            var2 += Math.random() * 1.5;
        }
        var2 = var2 - 1 + Math.random() * 2.5;
    }
    if (var2 < 0) {
        var2 = 0;
    }

    return var2.toFixed(2);
}

function findInList(collegeList, college) {
    for (let i = 0; i < collegeList.length; i++) {
        if (collegeList[i][0] === college) {
            return i;
        }
    }
    return -1;
}

function chanceCollege(collegeList, i, demScore, testOptional, sat, act, extracurriculars, ap_courses, essayStrength, gpa, interviewStrength, app_type) {
    let baseChance = parseFloat(collegeList[i][1]); // Convert acceptance rate to percentage
    let interviewScore = interviewStrength;

    let student_num = 0.0;
    if (testOptional) {
        // GPA = 40 pts, EC = 20 pts, Essay = 15 pts, AP = 10 pts, Interview = 15 pts
        if (gpa > 99) {
            student_num += 40;
        } else if (gpa > 98) {
            student_num += 39;
        } else if (gpa > 97) {
            student_num += 38;
        } else if (gpa > 96) {
            student_num += 36;
        } else if (gpa > 95) {
            student_num += 34;
        } else if (gpa > 94) {
            student_num += 32;
        } else if (gpa > 93) {
            student_num += 29;
        } else if (gpa > 92) {
            student_num += 26.5;
        } else if (gpa > 91) {
            student_num += 25;
        } else if (gpa > 90) {
            student_num += 22;
        } else if (gpa > 88) {
            student_num += 21;
        } else if (gpa > 85) {
            student_num += 16;
        } else if (gpa > 82.5) {
            student_num += 13;
        } else if (gpa > 80) {
            student_num += 11;
        } else if (gpa > 75) {
            student_num += 8;
        } else if (gpa > 70) {
            student_num += 5;
        } else {
            student_num += 2;
        }
        student_num += extracurriculars * 2;
        student_num += ap_courses * 0.9;
        student_num += interviewScore * 1.5;
        student_num += essayStrength * 1.5;
        student_num -= 4;
    } else {
        // GPA = 35 pts, EC = 15 pts, Essay = 15 pts, AP = 12.5 pts, Interview = 12.5 pts, SAT/ACT = 15 pts
        if (gpa > 99) {
            student_num += 35;
        } else if (gpa > 98) {
            student_num += 34;
        } else if (gpa > 97) {
            student_num += 33;
        } else if (gpa > 96) {
            student_num += 32;
        } else if (gpa > 95) {
            student_num += 30;
        } else if (gpa > 94) {
            student_num += 28;
        } else if (gpa > 93) {
            student_num += 26;
        } else if (gpa > 92) {
            student_num += 24;
        } else if (gpa > 91) {
            student_num += 22;
        } else if (gpa > 90) {
            student_num += 20;
        } else if (gpa > 88) {
            student_num += 18;
        } else if (gpa > 85) {
            student_num += 15;
        } else if (gpa > 82.5) {
            student_num += 12;
        } else if (gpa > 80) {
            student_num += 10;
        } else if (gpa > 75) {
            student_num += 7;
        } else if (gpa > 70) {
            student_num += 5;
        } else {
            student_num += 3;
        }

        student_num += extracurriculars * 1.5;
        student_num += ap_courses * 1.25;
        student_num += interviewScore * 1.25;
        student_num += essayStrength * 1.5;

        // SAT/ACT contribution (15 pts max)
        if (sat !== -1) {
            if (sat === 1600) {
                student_num += 15;
            } else if (sat >= 1570) {
                student_num += 14;
            } else if (sat >= 1540) {
                student_num += 13;
            } else if (sat >= 1510) {
                student_num += 11.5;
            } else if (sat >= 1490) {
                student_num += 10.5;
            } else if (sat >= 1450) {
                student_num += 9;
            } else if (sat >= 1400) {
                student_num += 6;
            } else if (sat >= 1300) {
                student_num += 3;
            } else {
                student_num += 1;
            }
        } else if (act !== -1) {
            if (act === 36) {
                student_num += 15;
            } else if (act >= 35) {
                student_num += 14;
            } else if (act >= 34) {
                student_num += 13;
            } else if (act >= 33) {
                student_num += 12;
            } else if (act >= 32) {
                student_num += 11;
            } else if (act >= 31) {
                student_num += 10;
            } else if (act >= 30) {
                student_num += 9;
            } else if (act >= 29) {
                student_num += 7;
            } else if (act >= 27) {
                student_num += 5;
            } else if (act >= 25) {
                student_num += 3;
            } else if (act >= 23) {
                student_num += 2;
            } else {
                student_num += 1;
            }
        }
    }

    if (demScore > 5) {
        student_num += (demScore - 5);
    } else {
        student_num -= (5 - demScore);
    }

    let tier = classify(student_num);
    let chances = 0;
    if (baseChance < 0.05) { // tier 1
        if (tier == 1) {
            chances = (36 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 2) {
            chances =  (27 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (21 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 4) {
            chances =  (13 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 5) {
            chances =  (4 + (Math.random() * 6 - 3));
        }
        else if (tier == 6) {
            chances =  (2 + (Math.random() * 6 - 3));
        }
        else if (tier == 7) {
            chances =  (1 + (Math.random() * 2 - 1));
        }
        else if (tier == 8) {
            chances =  (0.5 + (Math.random() * 0.4 - 0.2));
        }
        else if (tier == 9) {
            chances =  (0.2 + (Math.random() * 0.2 - 0.1));
        }
        else if (tier == 10) {
            chances =  (0.1);
        }
        else {
            chances =  0.05;
        }
    }
    else if (baseChance < 0.1) { // tier 1
        if (tier == 1) {
            chances = (46 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 2) {
            chances =  (34 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (27 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 4) {
            chances =  (19 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 5) {
            chances =  (12 + (Math.random() * 6 - 3));
        }
        else if (tier == 6) {
            chances =  (6 + (Math.random() * 6 - 3));
        }
        else if (tier == 7) {
            chances =  (2 + (Math.random() * 2 - 1));
        }
        else if (tier == 8) {
            chances =  (0.5 + (Math.random() * 0.4 - 0.2));
        }
        else if (tier == 9) {
            chances =  (0.2 + (Math.random() * 0.2 - 0.1));
        }
        else if (tier == 10) {
            chances =  (0.1);
        }
        else {
            chances =  0.05;
        }
    }
    else if (baseChance < 0.16) { // tier 2
        if (tier == 1) {
            chances =  (57 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 2) {
            chances =  (44 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 3) {
            chances =  (36 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 4) {
            chances =  (27 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 5) {
            chances =  (21 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 6) {
            chances =  (13 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 7) {
            chances =  (7 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 8) {
            chances =  (3 + (Math.random() * 0.4 - 0.2 - 2));
        }
        else if (tier == 9) {
            chances =  (2 + (Math.random() * 0.2 - 0.1));
        }
        else if (tier == 10) {
            chances =  (1 + (Math.random() * 0.2 - 0.1));
        }
        else {
            chances =  0.5 + (Math.random() * 0.1 - 0.05);
        }
    }

    else if (baseChance < 0.25) { // tier 3
        if (tier == 1) {
            chances =  (67 + (Math.random() * 10 - 5 - 2));
        }
        else if (tier == 2) {
            chances =  (55 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (41 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 4) {
            chances =  (34 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 5) {
            chances =  (25 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 6) {
            chances =  (18 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 7) {
            chances =  (11 + (Math.random() * 4 - 2 - 2));
        }
        else if (tier == 8) {
            chances =  (6 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 9) {
            chances =  (3 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 10) {
            chances =  (2 + (Math.random() * 0.2 - 0.1));
        }
        else {
            chances =  0.7 + (Math.random() * 0.2 - 0.1);
        }
    }

    else if (baseChance < 0.35) { // tier 4
        if (tier == 1) {
            chances =  (74 + (Math.random() * 10 - 5 - 2));
        }
        else if (tier == 2) {
            chances =  (67 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (58 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 4) {
            chances =  (48 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 5) {
            chances =  (39 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 6) {
            chances =  (35 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 7) {
            chances =  (24 + (Math.random() * 4 - 2 - 2));
        }
        else if (tier == 8) {
            chances =  (21 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 9) {
            chances =  (14+ (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 10) {
            chances =  (7 + (Math.random() * 0.2 - 0.1 - 2));
        }
        else {
            return 3 + (Math.random() * 0.2 - 0.1 - 2);
        }
    }

    else if (baseChance < 0.45) { // tier 5
        if (tier == 1) {
            chances =  (79 + (Math.random() * 10 - 5 - 2));
        }
        else if (tier == 2) {
            chances =  (71 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (65 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 4) {
            chances =  (56 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 5) {
            chances =  (49 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 6) {
            chances =  (41 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 7) {
            chances =  (33 + (Math.random() * 4 - 2 - 2));
        }
        else if (tier == 8) {
            chances =  (25 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 9) {
            chances =  (18 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 10) {
            chances =  (12 + (Math.random() * 2 - 1 - 2));
        }
        else {
            chances =  4 + (Math.random() * 0.2 - 0.1 - 2);
        }
    }

    else if (baseChance < 0.6) { // tier 6
        if (tier == 1) {
            chances =  (85 + (Math.random() * 12 - 6 - 2));
        }
        else if (tier == 2) {
            chances =  (78 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (71 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 4) {
            chances =  (65 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 5) {
            chances =  (55 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 6) {
            chances = (46 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 7) {
            chances =  (36 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 8) {
            chances =  (25 + (Math.random() * 4 - 2 - 2));
        }
        else if (tier == 9) {
            chances =  (16 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 10) {
            chances =  (7 + (Math.random() * 2 - 1 - 2));
        }
        else {
            chances =  3 + (Math.random() * 2 - 1 - 2);
        }
    }

    else if (baseChance < 0.8) { // tier 7
        if (tier == 1) {
            chances =  (90 + (Math.random() * 12 - 6 - 2));
        }
        else if (tier == 2) {
            chances =  (87 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (80 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 4) {
            chances =  (74 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 5) {
            chances =  (65 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 6) {
            chances =  (56 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 7) {
            chances =  (45 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 8) {
            chances =  (37 + (Math.random() * 4 - 2 - 2));
        }
        else if (tier == 9) {
            chances =  (26 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 10) {
            chances =  (16 + (Math.random() * 2 - 1 - 2));
        }
        else {
            chances =  13 + (Math.random() * 2 - 1 - 2);
        }
    }
    else {
        if (tier == 1) {
            chances =  (93 + (Math.random() * 12 - 6 - 2));
        }
        else if (tier == 2) {
            chances =  (87 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 3) {
            chances =  (80 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 4) {
            chances =  (74 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 5) {
            chances =  (65 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 6) {
            chances =  (56 + (Math.random() * 8 - 4 - 2));
        }
        else if (tier == 7) {
            chances =  (45 + (Math.random() * 6 - 3 - 2));
        }
        else if (tier == 8) {
            chances =  (37 + (Math.random() * 4 - 2 - 2));
        }
        else if (tier == 9) {
            chances =  (28 + (Math.random() * 2 - 1 - 2));
        }
        else if (tier == 10) {
            chances =  (24 + (Math.random() * 2 - 1 - 2));
        }
        else {
            chances =  18 + (Math.random() * 2 - 1 - 2);
        }
    }

    if (app_type === "ED" && collegeList[i][2] !== "N") {
        chances *= parseFloat(collegeList[i][2]);
    }
    if ((app_type === "EA" || app_type === "REA") && collegeList[i][3] !== "N") {
        chances *= parseFloat(collegeList[i][3]);
    }

    chances -= Math.random() * 4 - 1;

    if (interviewScore < 2) {
        chances -= Math.random() * 7;
    }
    if (interviewScore > 8) {
        chances += Math.random() * 7;
    }
    if (chances <= 0.0) {
        chances = 0.0;
        chances += Math.random() * 1.5;
    }
    if (chances >= 100.0) {
        chances = 100.0;
        chances -= Math.random() * 3;
    }
    if (chances >= 97) {
        chances -= Math.random() * 6;
    }

    chances = Math.min(Math.max(chances, 0), 100);
    return Math.round(chances * 100.0) / 100.0;
}

function classify(num) {
    if (num >= 96) {
        return 1;
    } else if (num >= 92) {
        return 2;
    } else if (num >= 87) {
        return 3;
    } else if (num >= 83) {
        return 4;
    } else if (num >= 76) {
        return 5;
    } else if (num >= 70) {
        return 6;
    } else if (num >= 63) {
        return 7;
    } else if (num >= 51) {
        return 8;
    } else if (num >= 39) {
        return 9;
    } else if (num >= 30) {
        return 10;
    } else {
        return 11;
    }
}

function getType(chance) {
    if (chance > 80) {
        return BRIGHT_GREEN + "Highly Likely" + RESET;
    } else if (chance > 65) {
        return BRIGHT_LIME + "Safety" + RESET;
    } else if (chance > 45) {
        return BRIGHT_ORANGE + "Target" + RESET;
    } else if (chance > 30) {
        return BRIGHT_ORANGE + "Hard Target" + RESET;
    } else if (chance > 21) {
        return BRIGHT_ORANGE + "Competitive" + RESET;
    } else if (chance > 12) {
        return BRIGHT_RED + "Reach" + RESET;
    } else if (chance > 5) {
        return BRIGHT_DARK_RED + "Big Reach" + RESET;
    } else {
        return BRIGHT_PURPLE + "Huge Reach" + RESET;
    }
}

function admissionsDecision(chances, appType, collegeIndex, collegesApplied) {
    let yourFate = Math.min(Math.random() * 100, Math.random() * 100) + Math.random() * 23;
    let collegeName = collegesApplied[collegeIndex][0];
    let reset = '\x1b[0m';
    let green = '\x1b[32m';
    let yellow = '\x1b[33m';
    let blue = '\x1b[34m';
    let red = '\x1b[31m';

    if (appType === "ED") {
        if (yourFate < chances - Math.random() * 55) {
            console.log(`${green}Congratulations! ${reset}You have been admitted to ${blue}${collegeName}${reset} with a scholarship and honors under Early Decision.`);
            return "ASH";  // Admitted with Scholarship & Honors
        } else if (yourFate < chances - Math.random() * 25) {
            console.log(`${green}Excellent news! ${reset}You have been admitted to ${blue}${collegeName}${reset} with a scholarship under Early Decision.`);
            return "AS";  // Admitted with Scholarship
        } else if (yourFate < chances) {
            console.log(`You have been accepted to ${blue}${collegeName}${reset} under Early Decision. ${green}Congratulations!${reset}`);
            return "A";  // Admitted
        } else if (yourFate < chances + Math.random() * 30) {
            console.log(`Your application to ${blue}${collegeName}${reset} has been${yellow} deferred${reset}. We encourage you to remain hopeful and patient as the regular decision process continues.`);
            return "D";  // Deferred
        } else {
            console.log(`We regret to inform you that your application to ${blue}${collegeName}${reset} has been ${red}declined${reset}. Please remember that this is only one step in your journey, and many opportunities still lie ahead.`);
            return "R";  // Rejected
        }
    } else if (appType === "REA") {
        // REA decision logic
        if (yourFate < chances - Math.random() * 45) {
            console.log(`${green}Wonderful news! ${reset}You have been accepted to ${blue}${collegeName}${reset} with a scholarship and honors through Restrictive Early Action.`);
            return "ASH";  // Admitted with Scholarship & Honors
        } else if (yourFate < chances - Math.random() * 22) {
            console.log(`${green}Great news! ${reset}You have been accepted to ${blue}${collegeName}${reset} with a scholarship through Restrictive Early Action.`);
            return "AS";  // Admitted with Scholarship
        } else if (yourFate < chances) {
            console.log(`${green}Congratulations! ${reset}You have been accepted to ${blue}${collegeName}${reset} through Restrictive Early Action.`);
            return "A";  // Admitted
        } else if (yourFate < chances + Math.random() * 25) {
            console.log(`Your application to ${blue}${collegeName}${reset} has been${yellow} deferred${reset}. You'll hear back during the regular decision period.`);
            return "D";  // Deferred
        } else {
            console.log(`${red}Unfortunately, your application to ${blue}${collegeName}${reset} has been declined.${reset} Please continue pursuing other opportunities.`);
            return "R";  // Rejected
        }
    } else if (appType === "EA") {
        // EA decision logic
        if (yourFate < chances - Math.random() * 45) {
            console.log(`${green}Fantastic! ${reset}You have been accepted to ${blue}${collegeName}${reset} with a scholarship and honors under Early Action.`);
            return "ASH";  // Admitted with Scholarship & Honors
        } else if (yourFate < chances - Math.random() * 22) {
            console.log(`${green}Great news! ${reset}You have been accepted to ${blue}${collegeName}${reset} with a scholarship under Early Action.`);
            return "AS";  // Admitted with Scholarship
        } else if (yourFate < chances) {
            console.log(`${green}Congratulations! ${reset}You have been accepted to ${blue}${collegeName}${reset} under Early Action.`);
            return "A";  // Admitted
        } else if (yourFate < chances + Math.random() * 20) {
            console.log(`${yellow}Your application to ${blue}${collegeName}${reset} has been deferred.${reset} You will receive your final decision in the regular decision round.`);
            return "D";  // Deferred
        } else {
            console.log(`${red}Unfortunately, your application to ${blue}${collegeName}${reset} has been declined.${reset} Please continue pursuing your academic goals.`);
            return "R";  // Rejected
        }
    } else if (appType === "RD") {
        // RD decision logic
        if (yourFate < chances - Math.random() * 45) {
            console.log(`${green}Congratulations! ${reset}You have been accepted to ${blue}${collegeName}${reset} with a scholarship and honors under Regular Decision.`);
            return "ASH";  // Admitted with Scholarship & Honors
        } else if (yourFate < chances - Math.random() * 22) {
            console.log(`${green}Great news! ${reset}You have been accepted to ${blue}${collegeName}${reset} with a scholarship under Regular Decision.`);
            return "AS";  // Admitted with Scholarship
        } else if (yourFate < chances) {
            console.log(`${green}Congratulations! ${reset}You have been accepted to ${blue}${collegeName}${reset} under Regular Decision.`);
            return "A";  // Admitted
        } else if (yourFate < chances + Math.random() * 20) {
            console.log(`${yellow}You have been placed on the waitlist for ${blue}${collegeName}${reset}.${reset} You may be offered a spot if space becomes available.`);
            return "W";  // Waitlisted
        } else {
            console.log(`${red}Unfortunately, your application to ${blue}${collegeName}${reset} has been declined.${reset} We encourage you to pursue other great opportunities.`);
            return "R";  // Rejected
        }
    } else if (appType === "Waitlist") {
        // Waitlist decision logic
        if (yourFate < chances) {
            console.log(`${green}Congratulations! ${reset}You have been accepted to ${blue}${collegeName}${reset} off the waitlist.`);
            return "A";  // Accepted off the waitlist
        } else {
            console.log(`${red}Unfortunately, your application to ${blue}${collegeName}${reset} has been declined from the waitlist.${reset} We encourage you to explore other opportunities.`);
            return "R";  // Rejected from the waitlist
        }
    }
    return "NO";
}

