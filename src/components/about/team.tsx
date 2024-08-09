import { TeamMembers } from "@/constants/about";
import MemberTab from "../MemberTab";

const MeetOurTeam = () => {
    return (
        <section className="mb-24">
            <h1 className="container text-4xl font-bold text-darkblue text-center mb-5"> Meet Our Team </h1>
            <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {TeamMembers.map((e, index) => (
                    <MemberTab 
                        key={index}
                        name={e.name}
                        image={e.image}
                        position={e.position}
                    />
                ))}
            </div>
        </section>
    )
}

export default MeetOurTeam;