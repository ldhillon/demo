import Layout from "../../components/layout";
import Board from "../../components/board";
import Check from "../../components/check";
import Locations from "../data.json";

const Index = ({ location }) => (
    <Layout>
        <section className="container text-white bg-dark py-3">
            <div className="row">
                <img
                    src={`/img/${location.image}`}
                    className="col-sm-6"
                    alt={location.name}
                />
                {getDetails(location)}
            </div>
            {getTable(location)}
        </section>
    </Layout>
);

const getTable = (location) => (
    <table className="table table-bordered table-sm table-striped bg-secondary text-dark">
        <thead>
            <tr>
                <th>Room</th>
                <th>Monthly Rate</th>
                <th>Seats</th>
                <th>Private Washroom</th>
                <th>Phone</th>
                <th>Windows</th>
                <th>Corner</th>
            </tr>
        </thead>
        <tbody>
            {location.rooms.map((room) => (
                <tr key={room.description}>
                    <th>{room.description}</th>
                    <td>
                        {Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(room.monthlyRate)}
                    </td>
                    <td>{room.seats}</td>
                    <td>{room.privateFacilities && <Check />}</td>
                    <td>{room.phoneIncluded && <Check />}</td>
                    <td>{room.windows && <Check />}</td>
                    <td>{room.corner && <Check />}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const getDetails = (location) => (
    <div className="col-sm-6">
        <h4 className="display-4 text-white">{location.name}</h4>
        <p className="text-muted">{location.mailingAddress}</p>
        <div className="my-2">
            <Board location={location} />
        </div>
    </div>
);

export const getStaticProps = async ({ params }) => {
    const location = Locations.find((l) => l.id === params.id);

    return {
        props: {
            location,
        },
    };
};

export async function getStaticPaths() {
    return {
        paths: Locations.map((l) => ({
            params: { id: l.id },
        })),
        fallback: false,
    };
}

export default Index;