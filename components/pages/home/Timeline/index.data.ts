import dayjs, { Dayjs } from 'dayjs'

class ScheduleData {
  constructor(public title: string, public text: string) {}
}

export const TIMELINE_ARR: { date: Dayjs[]; data: ScheduleData[] }[] = [
  {
    date: [dayjs('2018-11-14'), dayjs('2018-11-20')],
    data: [
      new ScheduleData('“How to Pitch” workshop.', ''),
      new ScheduleData(
        'Robotics and Artificial Intelligence: Challenges and Perspectives workshop.',
        ''
      ),
      new ScheduleData('Big Data workshop.', ''),
      new ScheduleData('Proteus workshop.', ''),
      new ScheduleData(
        '"Starting up as an aspiring entrepreneur" workshop.',
        ''
      ),

      new ScheduleData('More workshops to be announced soon.', ''),
    ],
  },
  {
    date: [dayjs('2018-11-21')],
    data: [new ScheduleData('Panel sessions.', '')],
  },
  {
    date: [dayjs('2018-11-22')],
    data: [new ScheduleData('Pitching day!', '')],
  },
]
