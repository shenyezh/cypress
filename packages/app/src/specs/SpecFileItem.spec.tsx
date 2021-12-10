import SpecFileItem from './SpecFileItem.vue'

describe('SpecFileItem', () => {
  it('renders a SpecFileItem with the base filename and extension having different highlights', () => {
    cy.mount(() =>
      (<div class="bg-gray-1000 group">
        <SpecFileItem fileName="Hello" extension=".spec.jsx" selected={false}></SpecFileItem>
      </div>))

    cy.contains('Hello.spec.jsx').should('be.visible')

    cy.percySnapshot()
  })
})
