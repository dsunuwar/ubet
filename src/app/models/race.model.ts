import { Race } from './race.interface';

export class RaceInfo implements Race {
    raceStartTime: string;
    raceNumber: number;
    raceName: string;
    meetingName: string;
    location: string;
    meetingDate: string;
    raceType: string;

    // TODO: create race interface
    constructor(raceInfo: any) {
        this.raceStartTime = raceInfo.raceStartTime;
        this.raceNumber = raceInfo.raceNumber;
        this.raceName = raceInfo.raceName;
        this.meetingName = raceInfo.meeting.meetingName;
        this.location = raceInfo.meeting.location;
        this.meetingDate = raceInfo.meeting.meetingDate;
        this.raceType = raceInfo.meeting.raceType;
    }
}
