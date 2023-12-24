const Faq = () => {
    return (
        <div className="lg:w-2/3  mx-auto mb-6 lg:mb-16">
            <div className="">
                <h1 className='text-4xl font-bold text-center mb-6 lg:mb-24 '>Frequently Asked Questions </h1>
                <div className="text-left space-y-3">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How can Tasky help me manage my tasks more efficiently?
                        </div>
                        <div className="collapse-content">
                            <p>Taskey offers a user-friendly interface that allows you to create, organize, and prioritize tasks effortlessly. With features like drag-and-drop task management, real-time collaboration, and customizable task lists, Taskey is designed to streamline your workflow and boost your productivity.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Is Taskey suitable for teams and collaborative projects?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! Taskey is built with collaboration in mind. It enables teams to work together seamlessly by providing shared task lists, commenting features, and real-time updates. Whether you're working on a group project or managing tasks within your team, Taskey enhances communication and collaboration</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I access Taskey on multiple devices?
                        </div>
                        <div className="collapse-content">
                            <p> Yes, Taskey is designed to be accessible from anywhere. You can use Taskey on your desktop, laptop, tablet, or smartphone. The responsive design ensures a consistent and user-friendly experience across various devices, allowing you to stay organized and connected on the go.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;