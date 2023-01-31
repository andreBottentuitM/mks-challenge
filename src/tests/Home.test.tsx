import {render, screen} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'



describe('Home Page', () =>{
    
    

    it("should have a purchase button",  () => {
      
         
        const purchaseButton = screen.getByText('COMPRAR')
        expect(purchaseButton).toBeInTheDocument()
     
    })

})