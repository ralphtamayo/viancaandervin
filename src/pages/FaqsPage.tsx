import "./FaqsPage.scss";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-accordion";

function FaqsPage() {
  return (
    <div className="faq-container">
      <div className="faq-desc">
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <strong style={{ textAlign: "center", textDecoration: "underline" }}>
            TRAVEL
          </strong>
        </div>
        <Accordion multiple={true} collapsible={true} className="faq-accordion">
          <AccordionItem value="1">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                What's the nearest airport?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <p>The closest airport is Rome Fiumicino Airport (FCO).</p>
            </AccordionPanel>
          </AccordionItem>
          <hr />
          <AccordionItem value="2">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                How do we get to the venue?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <p>
                The nearest major train station to Abbazia San Pietro in Valle
                is Terni Station. We will be providing shuttle services from
                Terni station to the venue on the 11th of June, a day before the
                wedding.
              </p>
              <p>
                If you are traveling from other cities in Italy, the most common
                transfer point is Roma-Termini Station in Rome. From
                Roma-Termini, you can take a direct train to Terni, with a
                travel time of approximately 50 minutes to 1 hour.
              </p>
              <p>
                We recommend checking train schedules and booking tickets in
                advance via Trenitalia or similar platforms to ensure a smooth
                journey.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <hr />
          <AccordionItem value="3">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                What day should I arrive at the venue?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <p>
                We recommend arriving at the venue a day before the wedding,
                especially as it's a destination wedding. This allows you time
                to settle in.
              </p>
              <p>
                Don't forget to check local transportation schedules to ensure a
                smooth journey.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <hr />
          <AccordionItem value="4" className="long-title">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                How should I plan my travel before and/or after the wedding in
                Italy/Europe?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <p className="long-title-panel">
                As you prepare for your journey to our destination wedding,
                we're thrilled to share some travel options to help you make the
                most of your time in Europe. Whether you're exploring beyond the
                wedding or focusing on one destination, there's something for
                everyone:
              </p>
              <ol>
                <li>
                  <strong>GoEuGo</strong>
                  <p>
                    Website:{" "}
                    <a href="https://www.goeugo.eu">https://www.goeugo.eu</a>
                  </p>
                  <p>
                    A great budget-friendly option for exploring Europe,
                    offering guided tours, hotel accommodations, and
                    transportation for just €99 per day. The Amores family has
                    used this tour operator on previous trips and highly
                    recommends it for those looking for an affordable yet
                    convenient way to see multiple destinations without worrying
                    about the logistics.
                  </p>
                </li>
                <li>
                  <strong>Trafalgar and Intrepid</strong>
                  <p>
                    Trafalgar Website:{" "}
                    <a href="https://www.trafalgar.com/en-sg">
                      https://www.trafalgar.com/en-sg
                    </a>
                  </p>
                  <p>
                    Intrepid Website:{" "}
                    <a href="https://www.intrepidtravel.com/en">
                      https://www.intrepidtravel.com/en
                    </a>
                  </p>
                  <p>
                    For those seeking a more premium experience, these operators
                    offer slower-paced guided tours with high-quality
                    accommodations and expert guides. Perfect if you’d like a
                    relaxing and immersive journey through Europe.
                  </p>
                </li>
                <li>
                  <strong>Do-It-Yourself (DIY)</strong>
                  <p>
                    This is what the couple's family will be doing! DIY travel
                    allows you to customize your trip and explore at your own
                    pace. It’s also a fantastic option for those traveling on a
                    budget.
                  </p>
                  <p>
                    For Italy, we’ll be using TrenItalia train passes, staying
                    in AirBnBs or Agoda hotels, and doing self-guided or booking
                    daily tours through platforms like Viator and GetYourGuide.
                    It’s an easy and flexible way to travel with a bit of
                    research.
                  </p>
                </li>
                <li>
                  <strong>Customized Tours Through Local Travel Agents</strong>
                  <p>
                    For a more personalized experience, you can ask a local
                    travel agent to create a custom itinerary just for you. This
                    is a fantastic option if you’d like a mix of independent
                    exploration and guided experiences tailored to your
                    interests.
                  </p>
                </li>
              </ol>
              <p>
                We hope these options help you plan a wonderful trip. We can’t
                wait to celebrate with you!
              </p>
            </AccordionPanel>
          </AccordionItem>
          <hr />
          <AccordionItem value="5">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                What is the Jubilee and how should I consider it in my travel
                plans?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <p className="long-title-panel">
                The Jubilee is an extraordinary Catholic religious event that
                draws millions of the faithful to Rome. Ever since the year of
                1300, these pilgrims from all over the world perform a holy
                pilgrimage to the Eternal City.
              </p>
              <p>
                This is the only time pilgrims can witness the opening of the
                Catholic “Holy Doors” that are only meant to be opened by the
                Pope during this year.
              </p>
              <p>
                Several such doors are located across Rome; the most sanctified
                one is in St. Peter’s Basilica in Vatican City.
              </p>
              <p>
                The holy pilgrimage to Rome signifies personal spiritual
                renewal.
              </p>
              <p>
                We encourage you to download the app "iubilaeum25", which is
                available to download on all app stores. You can use this app to
                register for activities, including your spot for the five Holy
                Door pilgrimages. The app will give you a QR code to allow
                entry.
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "25px",
          }}
        >
          <strong style={{ textAlign: "center", textDecoration: "underline" }}>
            CEREMONY & RECEPTION
          </strong>
        </div>
        <Accordion multiple={true} collapsible={true} className="faq-accordion">
          <AccordionItem value="1">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                Will the ceremony and reception be indoors or outdoors?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <p className="long-title-panel">
                The ceremony will be indoors, and the reception will be
                outdoors.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <hr />
          <AccordionItem value="2" className="long-title">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                What should I do if I have dietary restrictions?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              Please contact either the bride or groom so we can take note.
            </AccordionPanel>
          </AccordionItem>
          <hr />
          <AccordionItem value="3" className="long-title">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                Can I take pictures during the ceremony?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              We encourage you to capture memories with your cameras and phones
              during the ceremony and reception. However, we kindly ask that you
              refrain from taking photos or videos during the bride's walk down
              the aisle. This moment is very special to us, and we'd love for
              you to be fully present as it unfolds.
            </AccordionPanel>
          </AccordionItem>
          <hr />
          <AccordionItem value="4" className="long-title">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                Will there be an open bar?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              Yes, the drinks are on us, please party accordingly.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "25px",
          }}
        >
          <strong style={{ textAlign: "center", textDecoration: "underline" }}>
            MISCELLANEOUS
          </strong>
        </div>
        <Accordion multiple={true} collapsible={true} className="faq-accordion">
          <AccordionItem value="1">
            <AccordionHeader expandIconPosition="end">
              <div style={{ whiteSpace: "normal" }}>
                What should I do if I have a question that isn’t answered here?
              </div>
            </AccordionHeader>
            <AccordionPanel>
              <p className="long-title-panel">
                Please reach out to either the bride or groom. We are happy to
                help!
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqsPage;
