import React from 'react'

const Projects = () => {

    const Projects = [
        {
            "name": "News Portal App",
            "image": "data:image/jpeg;base64,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",
            "desc": " Developed a news web portal using class-based components in React.js, displaying real time news updates.Implemented API integration for fetching news articles and designed a responsive UI for better readability.",
            "github_url": "https://github.com/Niles01/News-portal-in-reactjs.git",
        },
        {
            "name": "AI-Based Result Analysis System",
            "image":"data:image/jpeg;base64,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",
            "desc": " Built an AI-powered result analysis system using Python and Pandas to analyze student performance. The system automatically generates data-driven insights and saves reports in a Word document for easy sharing.",
            "github_url": "",
        }
    ]

    return (
        <>

            <div className='container py-5'>
                <h1 className='fs-1 fw-bold mb-3'>Projects</h1>
                <div className="d-flex gap-3" style={{}}>
                    {
                        Projects.map((ele) => (
                            <div className="card" style={{ width: '18em' }}>
                                <img src={ele.image} className="card-img-top" alt="Card image" />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <p className="card-text">
                                        {ele.desc}
                                    </p>
                                    <a href={ele.github_url=="" ? "" : ele.github_url} className={`btn btn-primary ${ele.github_url=='' ? 'text-decoration-line-through btn-danger':''}`}>View Project</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Projects