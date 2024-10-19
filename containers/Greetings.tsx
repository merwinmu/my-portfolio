import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative pb-8">

        <Container className=" d-flex">
          <Row>
            <Col lg="12">
              <div>
                <div className="flex justify-start items-center gap-4">
                  <img
                    src={greetings.imageUrl}
                    alt="Description"
                    style={{ width: '20%', borderRadius: '50%' }}
                    className="shadow-lg "
                  />
                  <span className="text-3xl font-medium">{greetings.title}</span> {/* Adjust text size here */}

                </div>

                <p className="lead ">{greetings.description}</p>
              </div>

              {greetings.resumeLink && (
                <div className="flex pt-4">
                  <a
                    className="bg-gray-900 text-white p-2 rounded-xl gap-2 flex"

                    href={greetings.resumeLink}
                  >
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>

                    </div>

                    <div>
                      <span >Mein Lebenslauf</span>
                    </div>

                  </a>
                </div>
              )}
            </Col>

          </Row>
        </Container>
        {/* SVG separator */}

        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
