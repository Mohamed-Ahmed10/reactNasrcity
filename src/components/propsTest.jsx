const PropsTest = ({courseName, courseDesc}) => {
    return (
        <div className="props">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{courseName}</h5>
                    <p className="card-text">{courseDesc}</p>
                </div>
            </div>
        </div>
    );
};

export default PropsTest;
