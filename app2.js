var date = 'Monday' || 'monday';
if(date === 'Monday' || date === 'monday'){
    console.log('Monday ->' );
}else if (date ==='Tuesday' || date === 'tuesday'){
     console.log('Tuesday ->');
}



switch (date) {
    case 'Monday':
    console.log('Monday ->','monday' );
    break;
    case 'Tuesday':
    console.log('Tuesday ->','tuesday' );
    break;
    case 'Wednesday':
    console.log('Wednesday ->','wednesday');
    break;
    default:
    console.log ('unknown day');
}