export class LabelsService {
  testLabels = [
	'ng sales, managing print and online programs, and [customer] service. Essential Responsibilities: drive advert'
  ];

  getRandomLabel() {
    const index = Math.floor((Math.random() * this.testLabels.length));
    return this.testLabels[index];
  }
}
