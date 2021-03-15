import React, { useState } from "react"

import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
} from "reactstrap"
import Accordian from "../../components/Accordian"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const PagesFaqs = () => {
  const [activeTab, setactiveTab] = useState("1")

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="FAQs" />

          <div className="checkout-tabs">
            <Row>
              <Card>
                <CardBody>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <CardTitle className="mb-2">
                        <div className="faq-icon mr-3">
                          <form className="d-none d-lg-block">
                            <div className="text-center w-50 mx-auto">
                              <input
                                type="text"
                                className="form-control rounded-sm"
                                placeholder="Search..."
                              />
                            </div>
                          </form>
                          <i className="fas fa-question-circle font-size-20 text-primary mr-3" />
                          <span>General Questions</span>
                        </div>
                      </CardTitle>
                      <Accordian
                        question1="What is Lorem Ipsum ?"
                        answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                        question2="Why do we use it ?"
                        answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                        question3="Where does it come from ?"
                        answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                      />

                      <CardTitle className="mb-2 mt-4">
                        <div className="faq-icon mr-3">
                          <i className="fas fa-arrow-circle-up font-size-20 text-primary mr-3" />
                          <span>Privacy Policy</span>
                        </div>
                      </CardTitle>
                      <Accordian
                        question1="What is Lorem Ipsum ?"
                        answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                        question2="Why do we use it ?"
                        answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                        question3="Where does it come from ?"
                        answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                      />
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default PagesFaqs
