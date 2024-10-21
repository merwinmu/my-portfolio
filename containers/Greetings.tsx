import React, { useEffect } from "react";
import { greetings } from "../portfolio";  // Import the greetings object with multiple languages
import { useRouter } from "next/router";  // Import useRouter from next/router
import { Button, Container, Row, Col } from "reactstrap";
import { Icon } from "@iconify/react";


const Greetings = () => {
  const { locale } = useRouter();  // Get the current language locale (e.g., 'en' or 'de')

  // Get the localized content based on the current language
  const localizedGreeting = greetings[locale as keyof typeof greetings];

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, []);

  return (
    <main>
      <div className="position-relative pb-8">
        <Container className=" d-flex">
          <Row>
            <Col lg="12">
              <div>
                <div className="flex justify-start items-center gap-4">
                  <img
                    src={localizedGreeting.imageUrl}  // Use the localized image URL
                    alt="Description"
                    style={{ width: '20%', borderRadius: '50%' }}
                    className="shadow-lg "
                  />
                  <p className="fs-1">{localizedGreeting.title}</p> {/* Use the localized title */}
                </div>
                <p className="lead ">{localizedGreeting.description}</p> {/* Use the localized description */}
              </div>

              {localizedGreeting.resumeLink && (
                <div className="flex pt-4">
                  <a
                    className="bg-gray-900 text-white p-2 rounded-xl gap-2 flex justify-center items-center"
                    href={localizedGreeting.resumeLink}  // Use the localized resume link
                  >
                    <Icon icon="mdi:resume" data-inline="false" width={20}></Icon>
                    <div>
                      <span>{localizedGreeting.resumeTitle}</span> {/* The label text can also be localized if needed */}
                    </div>
                  </a>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Greetings;
