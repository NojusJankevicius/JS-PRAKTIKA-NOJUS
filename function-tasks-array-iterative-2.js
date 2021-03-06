const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
  // ... sprendimas ir spausdinimas
  function studentsFacultyOfIT (student){
    let selectedFaculty = student.filter(p => p.faculty === 'Informatikos fakultetas');
    result = selectedFaculty
    return result
  }
  console.log(studentsFacultyOfIT(students));
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
  // ... sprendimas ir spausdinimas
  studentsFacultyOfChemistry = students.filter(p => p.faculty === 'Chemijos fakultetas');
  console.log(studentsFacultyOfChemistry);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  // ... sprendimas ir spausdinimas
  studentsFacultyOfElectronics = students.filter(p => p.faculty === 'Elektros ir elektronikos fakultetas');
  console.log(studentsFacultyOfElectronics);
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  // ... sprendimas ir spausdinimas
  const result = students
    .filter(s => s.faculty === 'Informatikos fakultetas')
    .map(({ name, surname, modules }) => ({ fullname: name + ' ' + surname, modules }))
    .map(({ fullname, modules }) => ({
      fullname,
      avg: Math.round(
        modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, m) => avg + m / marks.length, 0) * credits, 0)
        / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
      ) / 10
    }))
    console.table(result);

}

console.groupEnd();
console.groupCollapsed('5. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  // ... sprendimas ir spausdinimas
  const result = students
  .filter(student => student.faculty === 'Chemijos fakultetas')
  .map(({name, surname, modules}) => ({ fullname: name + ' ' + surname, modules}))
  .map(({ fullname, modules}) => ({
    fullname,
    avg: Math.round(
      modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, m) => avg + m / marks.length, 0) * credits, 0)
      / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
    ) / 10
  }));
  console.table(result);

}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  // ... sprendimas ir spausdinimas
  const result = students
  .filter(student => student.faculty === 'Elektros ir elektronikos fakultetas')
  .map(({name, surname, modules}) => ({ fullname: name + ' ' + surname, modules}))
  .map(({ fullname, modules}) => ({
    fullname,
    avg: Math.round(
      modules.reduce((avgSum, { marks, credits }) => avgSum + marks.reduce((avg, m) => avg + m / marks.length, 0) * credits, 0)
      / modules.reduce((creditSum, module) => creditSum + module.credits, 0) * 10
    ) / 10
  }));
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik pirmo kurso studentus');
{
  // ... sprendimas ir spausdinimas
  studentsFirstYear = students.filter(p => p.course === 1);
  console.log(studentsFirstYear);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik antro kurso studentus');
{
  // ... sprendimas ir spausdinimas
  studentsFirstYear = students.filter(p => p.course === 2);
  console.log(studentsFirstYear);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti tik trečio kurso studentus');
{
  // ... sprendimas ir spausdinimas
  studentsFirstYear = students.filter(p => p.course === 3);
  console.log(studentsFirstYear);
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti tik ketvirto kurso studentus');
{
  // ... sprendimas ir spausdinimas
  studentsFirstYear = students.filter(p => p.course === 4);
  console.log(studentsFirstYear);
}
console.groupEnd();

// ACARGĖJ
console.groupCollapsed('11. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  // ... sprendimas ir spausdinimas
  function map(arr, changeElement) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(changeElement(arr[i]));
    }
    return newArray;
  }
  
  function calcStudentCredits(student) {
    let moduleCreditsSum = 0;
    for (let i = 0; i < student.modules.length; i++) {
      const module = student.modules[i];
      const moduleCredits = module.credits;
      moduleCreditsSum += moduleCredits;
    }
    return moduleCreditsSum;
  }
  
  function calcModuleAvg(module){
    let markSum = 0;
    for (let i = 0; i < module.marks.length; i++) {
      const mark = module.marks[i];
      markSum += mark;
    }
    return markSum / module.marks.length;
  }
  
  function calcStudentWeightedSemesterAvg(student) {
    let weightedModuleAvgSum = 0;
    for (let i = 0; i < student.modules.length; i++) {
      const module = student.modules[i];
      const moduleCredits = module.credits;
      const weightedModuleAvg = calcModuleAvg(module) * moduleCredits;
      weightedModuleAvgSum += weightedModuleAvg;
    }
    return weightedModuleAvgSum;
  }
  
  
  function formStudentFullnameAndSemesterAvg(student) {
    const creditCount = calcStudentCredits(student);
    const weightedSemesterAvg = calcStudentWeightedSemesterAvg(student);
    return {
      fullname: student.name + ' ' + student.surname,
      avg: Math.round(100 * weightedSemesterAvg / creditCount) / 100
    }
  }
  
  console.table(map(students, formStudentFullnameAndSemesterAvg));
}

