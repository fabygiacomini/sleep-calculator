/* how many hours you should sleep each day in a week */
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
};
const getActualSleepHours = () =>
  getSleepHours('monday') + 
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) { return console.log('You sleep the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    return console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week.');
  } else if (actualSleepHours < idealSleepHours) {
    return console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep tahn you needed this week. Get some rest.');
  }
};



