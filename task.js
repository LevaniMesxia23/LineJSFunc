var deepJS = {
  currentEnrollment: [],
  studentRecords: [],

  addStudent(id, name, paid) {
    this.studentRecords.push({ id, name, paid });
  },

  enrollStudent(id) {
    if (!this.currentEnrollment.includes(id)) {
      this.currentEnrollment.push(id);
    }
  },

  printCurrentEnrollment() {
    this.printRecords(this.currentEnrollment);
  },
  

  enrollPaidStudents() {
    this.currentEnrollment = this.paidStudentsToEnroll();
    this.printCurrentEnrollment();
  },

  remindUnpaidStudents() {
    this.remindUnpaid(this.currentEnrollment);
  },

  getStudentFromId(studentId) {
    return this.studentRecords.find(function (record) {
      return record.id == studentId;
    });
  },

  printRecords(recordIds) {
    var records = recordIds.map(this.getStudentFromId.bind(this));

    records.sort(this.sortByNameAsc);

    records.forEach(this.printRecord);
  },

  sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  },

  printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  },

  paidStudentsToEnroll() {
    var recordsToEnroll = this.studentRecords.filter(
      this.needToEnroll.bind(this)
    );

    var idsToEnroll = recordsToEnroll.map(this.getStudentId);

    return [...this.currentEnrollment, ...idsToEnroll];
  },

  needToEnroll(record) {
    return record.paid && !this.currentEnrollment.includes(record.id);
  },

  getStudentId(record) {
    return record.id;
  },

  remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

    this.printRecords(unpaidIds);
  },

  notYetPaid(studentId) {
    var record = this.getStudentFromId(studentId);
    return !record.paid;
  },
};

// სტუდენტების დამატება
deepJS.addStudent(311, "Frank", true);
deepJS.addStudent(410, "Suzy", true);
deepJS.addStudent(709, "Brian", false);
deepJS.addStudent(105, "Henry", false);
deepJS.addStudent(502, "Mary", true);
deepJS.addStudent(664, "Bob", false);
deepJS.addStudent(250, "Peter", true);
deepJS.addStudent(375, "Sarah", true);
deepJS.addStudent(867, "Greg", false);

// სტუდენტების რეგისტრაცია
deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

// მიმდინარე რეგისტრაციის ჩვენება
deepJS.printCurrentEnrollment();
console.log("----");

// გადახდილი სტუდენტების რეგისტრაცია
deepJS.enrollPaidStudents();
console.log("----");

// შეხსენება გადაუხდელ სტუდენტებს
deepJS.remindUnpaidStudents();
