import PageTransition from "../components/PageTransition";

function About() {
    return (
        <PageTransition>
            <div className="text-center space-y-2">
                <h1 className="text-5xl">About</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, optio qui tempore nostrum maiores sint blanditiis
                    assumenda minima quis sunt earum natus sequi ab magnam eaque
                    reiciendis cum architecto tempora?
                </p>
            </div>
        </PageTransition>
    );
}

export default About;
