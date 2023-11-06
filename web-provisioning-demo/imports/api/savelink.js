import { Meteor } from 'meteor/meteor';


Meteor.methods({
    async generateSaveLink(text) {
        console.log(text);
        const saveLink = "https://pay.google.com/gp/t/savecard/eyJhY2NvdW50SHViSWQiOiAiQVBURVNUIiwgImFjY291bnREYXRhIjogImV5SnpaWE56YVc5dVNXUWlPaUFpTldJM01tVTJaV1F0TXpoaE9TMDBaREZqTFRnMU5XUXRZVGRoT1dVMVpEUTRZMkZsSW4wPSIsICJzZXJ2aWNlUHJvdmlkZXJJZCI6ICJBUFRFU1RfSVNTVUVSX0FQUF9QUk9WSURFUiJ9";
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        return saveLink;
    }
})