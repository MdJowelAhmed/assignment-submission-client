

const Faq = () => {
    return (
        <div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                How do I submit my assignment?
                </div>
                <div className="collapse-content">
                    <p>You can submit your assignment through the submission portal on our website. Simply log in to your account, locate the assignment submission page, and follow the instructions to upload your file.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What file formats are accepted for assignment submission?
                </div>
                <div className="collapse-content">
                    <p>We accept a variety of file formats including .doc, pdf,  Please ensure your file is in one of these formats before submission.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I make changes to my submission after it's been uploaded?
                </div>
                <div className="collapse-content">
                    <p>Once you have submitted your assignment, you may not be able to make changes to it. However, if you need to make any updates or corrections, please contact your instructor or the assignment coordinator for further guidance.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I resubmit my assignment if I'm not satisfied with my initial submission?
                </div>
                <div className="collapse-content">
                    <p>Policies regarding assignment resubmission may vary depending on the course and instructor. Please consult your assignment guidelines or contact your instructor for further information on resubmission policies.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What should I do if I miss the assignment deadline?
                </div>
                <div className="collapse-content">
                    <p>If you miss the assignment deadline, please reach out to your instructor or assignment coordinator as soon as possible to discuss possible extensions or alternative arrangements.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How will I know if my assignment has been successfully submitted?
                </div>
                <div className="collapse-content">
                    <p>Upon successful submission, you will receive a confirmation message on the submission portal confirming that your assignment has been received. Additionally, you may receive an email confirmation as well.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;