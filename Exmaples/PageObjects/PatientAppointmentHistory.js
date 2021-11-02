class PatientAppointmentHistory
{

    selectGlobalPatient(value)
    {
       cy.get('#select2-global-patients-container').click()
       const s = cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').click()
       s.type(value)
       cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('{enter}')
       .wait(3000)
 
    }
 
    clickAppoitnmentHistory()
     {
         cy.get('.ti-menu').click()
              cy.get('#sidebarnav').contains('Patients').click()
              cy.get('#demography').click({force : true})
              cy.get('#appointment-list > div > p').click()
              .wait(3000)
     }

     changeStatus(value)
     {
        cy.get("#select2-status-container").click()
        const s=cy.get("body > span > span > span.select2-search.select2-search--dropdown > input").click()
        s.type(value)
        cy.get("body > span > span > span.select2-search.select2-search--dropdown > input").type('{enter}')
        cy.get("#main-wrapper > div.page-wrapper > div > div > div > div > div.card-body > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(9) > button").click()//Click on submit button
        .wait(3000) 
     }

     deleteAppointmentHistory()
     {
         cy.get("#main-wrapper > div.page-wrapper > div > div > div > div > div.card-body > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()
     }


     editAppointmentDetails()
     {
         cy.get("#main-wrapper > div.page-wrapper > div > div > div > div > div.card-body > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(1)").click()
     }

     exportAppointmentlist()
     {
         cy.get("#main-wrapper > div.page-wrapper > div > div > div > div > div.card-header.d-table > div > form > button").click()
     }

     addAppointment()
     {
         cy.get("#main-wrapper > div.page-wrapper > div > div > div > div > div.card-header.d-table > a").click()
     }

     showFilter(value)
    {
        switch(value)
        {
            case 0:
               cy.get('#page-filter').select('Show 10 entries')
               break;
            case 1:
               cy.get('#page-filter').select('Show 25 entries')
               break;
            case 2:
               cy.get('#page-filter').select('Show 50 entries')
               break;
            case 3:
               cy.get('#page-filter').select('Show 100 entries')
               break;

        }
    }
}

export default PatientAppointmentHistory