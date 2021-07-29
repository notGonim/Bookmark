import React from 'react'
import { Headeing } from '../heading/headeing.component'
import { Questions } from '../questions/questions.component'
export const FAQ = () => {
    return (
        <section id="fqa" className="bg-gray-50  py-20 font-Poppins">
            <div className="container">
                <Headeing title="Frequently Asked Questions" para="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us. " />

                <div className="flex flex-col mx-auto lg:w-5/12 sm:w-3/4 px-5">
                    <Questions question="What is a Bookmark ?" answer="A clean and simple interface to organize your favourite websites , Open a new browser tab and see your sites load instantly ." />
                    <Questions question="How can I request a new browser?" answer="You could send us email with the browser you wish us to be supported ." />
                    <Questions question="Is there a mobile app?" answer="Unforunatly not yet but we are working on it . " />
                    <Questions question="What about other Chromium browsers?" answer="Unforunatly We don`t support it." />
                </div>
            </div>

        </section>
    )
}
