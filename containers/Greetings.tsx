import React, { useEffect } from "react";
import { greetings } from "../portfolio";  // Import the greetings object with multiple languages
import { useRouter } from "next/router";  // Import useRouter from next/router
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

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
                    className="bg-gray-900 text-white p-2 rounded-xl gap-2 flex"
                    href={localizedGreeting.resumeLink}  // Use the localized resume link
                  >
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    </div>
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
