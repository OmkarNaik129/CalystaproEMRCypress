class PatientImages
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
              cy.get('#patient-images > div > p').click()
              .wait(3000)
     }



}

export default PatientImages