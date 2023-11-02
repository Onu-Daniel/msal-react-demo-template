import { ProfileData } from "../components/ProfileData";

export const Profile = () => {
    return (
        <>
            <ProfileData displayData={{
                displayName: 'Placeholder Name',
                jobTitle: 'Placeholder title',
                mail: 'placeholder@mail.com',
                businessPhones: ['23490123'],
                officeLocation: 'North London address',
            }} />
        </>
    )
}