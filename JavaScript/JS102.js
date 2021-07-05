//JS102 project --- tuwaiq codes >> JS101 course


class Vehicles{
    constructor(name, company,ID)
    {
      this.name=name
      this.company=company
      this.ID=ID
    } 
}
class Car extends Vehicles{
    constructor(name, company,ID,type)
    {
      super(name,company,ID)
      this.type=type     
    }
}
class Plane extends Vehicles{
    constructor(name, company,ID,type)
    {
      super(name,company,ID)
      this.type=type     
    }
}
class Employee{
    constructor(name,ID, DB){
        this.name=name
        this.ID=ID
        this.DB=DB
      } 
}
class Driver extends Employee{
    constructor (name,ID, BD,licenseID)
    {
        super(name,ID, BD)
        this.licenseID= licenseID;
    }
}
class Pilot extends Employee{
    constructor(name,ID, BD,licenseID)
    {
        super(name,ID, BD)
        this.licenseID=licenseID;
    }
}
class Reservation {
    constructor(reservationID, employeeId ,vehiclesId,reservationDate)
    {
        this.employeeId= employeeId;
        this.vehiclesId= vehiclesId;
        this.reservationID= reservationID;
        this.reservationDate= reservationDate
    } 
}

// Objects Declartion:
let car1 = new Car ('Benz G-Class', 'Mercedes', 5000, 'electric');
let car2 = new Car ('e-tron Sportback', 'Audi', 8000, 'gas');
let car3 = new Car ('Cortina', 'Ford', 9000, 'gas');

let plan1 = new Plane (' Samson Switchblade', 'Samson', 2000, 'gas');
let plan2 = new Plane ('Lilium Jet', 'eVTOL ', 1000, 'electric');





/*
Function to check if the employee id compatible with the vehicle id or not 
if compatible the the reservation will be added to reserve array otherwise 
message will show up.
*/

let reservationList =[];
function ReservationCheck(vehicles,employee){   
    if((vehicles instanceof Car && employee instanceof Driver) || 
    (vehicles instanceof Plane &&  employee instanceof Pilot)){

        reservation = new Reservation (reservationList.length+100,
                                        employee.ID, 
                                        vehicles.ID, 
                                        new Date().toDateString());
        reservationList.push(reservation);
    }

    else
    {
        console.log(`${vehicles.ID} vehicle is not compatible to ${employee.name}`);
    }
} 

//using the function to check:
ReservationCheck(car2,new Driver ('Ahmed', 77, '1895/12/2','101')); 
ReservationCheck(car2,new Pilot ('Mohmmed', 99, '1988/09/21', '303'));//error msg
ReservationCheck(plan2,new Pilot ('Mohmmed', 99, '1988/09/21', '303'));
ReservationCheck(plan1,new Driver ('Ahmed', 77, '1895/12/2', '101'));//error msg



//printing all the reservation list:
reservationList.map((r,i) => {
    if(i==0)console.log(`
      -/- Reservation List -/-`)
    console.log(`
      --- Reservation NO.${i+1} ---
      Reservation ID : ${r.reservationID}
      Employee ID    : ${r.employeeId}
      Vhicle ID      : ${r.vehiclesId}
      Reservation Date   : ${r.reservationDate} 
    `)
  })


