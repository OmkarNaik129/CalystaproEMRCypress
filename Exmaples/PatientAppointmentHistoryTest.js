import LoginPage from './PageObjects/LoginPage'
import Exception from './PageObjects/Exception'
import LoginDetails from './PageObjects/LoginDetails'
import PatientAppointmentHistory from './PageObjects/PatientAppointmentHistory'

describe('Patient Appointment History', function() 
{
    it('Verify Change Appointment Status functionality', function() 
    {
      
    const n = new PatientAppointmentHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickAppoitnmentHistory()
    n.changeStatus('Boo')
   
    })

    it('Verify Delete Appointment functionality', function() 
    {
      
    const n = new PatientAppointmentHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickAppoitnmentHistory()
    n.deleteAppointmentHistory()
   
    })


    it('Verify Edit Appointment functionality', function() 
    {
      
    const n = new PatientAppointmentHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickAppoitnmentHistory()
    n.editAppointmentDetails()
   
    })



    it('Verify Add Appointment CTA functionality', function() 
    {
      
    const n = new PatientAppointmentHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickAppoitnmentHistory()
    n.addAppointment()
   
    })


    it('Verify Export Appointment list functionality', function() 
    {
      
    const n = new PatientAppointmentHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickAppoitnmentHistory()
    n.showFilter(0)
   
    })




    it('Verify Export Appointment list functionality', function() 
    {
      
    const n = new PatientAppointmentHistory()
    const e = new Exception()   
    const login = new LoginPage()
    const details = new LoginDetails()
    login.visit("live")
    e.except()
    details.loginDetails(1)
    login.Checkcheckbox()
    login.submit()
    n.selectGlobalPatient('Jack')
    n.clickAppoitnmentHistory()
    n.exportAppointmentlist()
   
    })







})