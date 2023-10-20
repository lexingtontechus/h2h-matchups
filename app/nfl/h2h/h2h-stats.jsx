"use client";

const h2hstats = [
  {
    Rk: "1",
    Player: "Tom Brady",
    Team: "NWE",
    Date: "2014-11-02",
    Cmp: "33",
    Att: "53",
    Inc: "20",
    CmpP: "62.3",
    Yds: "333",
    TD: "4",
    Int: "1",
    Pick6: "0",
    TDP: "7.5",
    IntP: "1.9",
    Rate: "97.4",
    Sk: "1",
    YdsLost: "1",
    SkP: "1.85",
    YA: "6.3",
    AYA: "6.94",
    ANYA: "6.8",
    YC: "10.1",
    RAtt: "2",
    RYds: "4",
    RYA: "2",
    RTD: "0",
    R1D: "1",
  },
  {
    Rk: "2",
    Player: "Peyton Manning",
    Team: "DEN",
    Date: "2014-11-02",
    Cmp: "34",
    Att: "57",
    Inc: "23",
    CmpP: "59.6",
    Yds: "438",
    TD: "2",
    Int: "2",
    Pick6: "0",
    TDP: "3.5",
    IntP: "3.5",
    Rate: "80.9",
    Sk: "1",
    YdsLost: "9",
    SkP: "1.72",
    YA: "7.7",
    AYA: "6.81",
    ANYA: "6.53",
    YC: "12.9",
    RAtt: "2",
    RYds: "3",
    RYA: "1.5",
    RTD: "0",
    R1D: "0",
  },
  ,
  {
    Rk: "3",
    Player: "Tom Brady",
    Team: "NWE",
    Date: "2013-11-24",
    Cmp: "34",
    Att: "50",
    Inc: "16",
    CmpP: "68",
    Yds: "344",
    TD: "3",
    Int: "0",
    Pick6: "0",
    TDP: "6",
    IntP: "0",
    Rate: "107.4",
    Sk: "3",
    YdsLost: "20",
    SkP: "5.66",
    YA: "6.9",
    AYA: "8.08",
    ANYA: "7.25",
    YC: "10.1",
    RAtt: "2",
    RYds: "0",
    RYA: "0",
    RTD: "0",
    R1D: "0",
  },
  {
    Rk: "4",
    Player: "Peyton Manning",
    Team: "DEN",
    Date: "2013-11-24",
    Cmp: "19",
    Att: "36",
    Inc: "17",
    CmpP: "52.8",
    Yds: "150",
    TD: "2",
    Int: "1",
    Pick6: "0",
    TDP: "5.6",
    IntP: "2.8",
    Rate: "70.4",
    Sk: "2",
    YdsLost: "18",
    SkP: "5.26",
    YA: "4.2",
    AYA: "4.03",
    ANYA: "3.34",
    YC: "7.9",
    RAtt: "1",
    RYds: "0",
    RYA: "0",
    RTD: "0",
    R1D: "0",
  },
  {
    Rk: "5",
    Player: "Tom Brady",
    Team: "NWE",
    Date: "2012-10-07",
    Cmp: "23",
    Att: "31",
    Inc: "8",
    CmpP: "74.2",
    Yds: "223",
    TD: "1",
    Int: "0",
    Pick6: "0",
    TDP: "3.2",
    IntP: "0",
    Rate: "104.6",
    Sk: "4",
    YdsLost: "30",
    SkP: "11.43",
    YA: "7.2",
    AYA: "7.84",
    ANYA: "6.09",
    YC: "9.7",
    RAtt: "4",
    RYds: "-2",
    RYA: "-0.5",
    RTD: "1",
    R1D: "1",
  },
  {
    Rk: "6",
    Player: "Peyton Manning",
    Team: "DEN",
    Date: "2012-10-07",
    Cmp: "31",
    Att: "44",
    Inc: "13",
    CmpP: "70.5",
    Yds: "337",
    TD: "3",
    Int: "0",
    Pick6: "0",
    TDP: "6.8",
    IntP: "0",
    Rate: "115.4",
    Sk: "2",
    YdsLost: "13",
    SkP: "4.35",
    YA: "7.7",
    AYA: "9.02",
    ANYA: "8.35",
    YC: "10.9",
    RAtt: "2",
    RYds: "9",
    RYA: "4.5",
    RTD: "0",
    R1D: "1",
  },
  {
    Rk: "7",
    Player: "Tom Brady",
    Team: "NWE",
    Date: "2010-11-21",
    Cmp: "19",
    Att: "25",
    Inc: "6",
    CmpP: "76",
    Yds: "186",
    TD: "2",
    Int: "0",
    Pick6: "0",
    TDP: "8",
    IntP: "0",
    Rate: "123.1",
    Sk: "1",
    YdsLost: "8",
    SkP: "3.85",
    YA: "7.4",
    AYA: "9.04",
    ANYA: "8.38",
    YC: "9.8",
    RAtt: "4",
    RYds: "-2",
    RYA: "-0.5",
    RTD: "0",
    R1D: "0",
  },

  {
    Rk: "8",
    Player: "Peyton Manning",
    Team: "IND",
    Date: "2010-11-21",
    Cmp: "38",
    Att: "52",
    Inc: "14",
    CmpP: "73.1",
    Yds: "396",
    TD: "4",
    Int: "3",
    Pick6: "0",
    TDP: "7.7",
    IntP: "5.8",
    Rate: "96.3",
    Sk: "0",
    YdsLost: "0",
    SkP: "0",
    YA: "7.6",
    AYA: "6.56",
    ANYA: "6.56",
    YC: "10.4",
    RAtt: "0",
    RYds: "0",
    RYA: "0",
    RTD: "0",
    R1D: "0",
  },
  {
    Rk: "9",
    Player: "Tom Brady",
    Team: "NWE",
    Date: "2009-11-15",
    Cmp: "29",
    Att: "42",
    Inc: "13",
    CmpP: "69",
    Yds: "375",
    TD: "3",
    Int: "1",
    Pick6: "0",
    TDP: "7.1",
    IntP: "2.4",
    Rate: "110.7",
    Sk: "2",
    YdsLost: "11",
    SkP: "4.55",
    YA: "8.9",
    AYA: "9.29",
    ANYA: "8.61",
    YC: "12.9",
    RAtt: "3",
    RYds: "3",
    RYA: "1",
    RTD: "0",
    R1D: "1",
  },
  {
    Rk: "10",
    Player: "Peyton Manning",
    Team: "IND",
    Date: "2009-11-15",
    Cmp: "28",
    Att: "44",
    Inc: "16",
    CmpP: "63.6",
    Yds: "327",
    TD: "4",
    Int: "2",
    Pick6: "0",
    TDP: "9.1",
    IntP: "4.5",
    Rate: "97.4",
    Sk: "1",
    YdsLost: "11",
    SkP: "2.22",
    YA: "7.4",
    AYA: "7.2",
    ANYA: "6.8",
    YC: "11.7",
    RAtt: "0",
    RYds: "0",
    RYA: "0",
    RTD: "0",
    R1D: "0",
  },
];

export default function H2HStats() {
  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-center">Head To Head MatchUp</h2>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1"></div>
        <div className="col-span-3">Passing</div>
        <div className="col-span-1">Rushing</div>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="... col-span-2">04</div>
        <div class="... col-span-8">Passing</div>
        <div class="... col-span-2 text-center">Rushing</div>
      </div>
      <table className="table table-zebra table-xs">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Passing</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Rushing</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Rk</th>
            <th>Player</th>
            <th>Team</th>
            <th>Date</th>
            <th>Cmp</th>
            <th>Att</th>
            <th>Inc</th>
            <th>Cmp%</th>
            <th>Yds</th>
            <th>TD</th>
            <th>Int</th>
            <th>Pick6</th>
            <th>TD%</th>
            <th>Int%</th>
            <th>Rate</th>
            <th>Sk</th>
            <th>Yds</th>
            <th>Sk%</th>
            <th>Y/A</th>
            <th>AY/A</th>
            <th>ANY/A</th>
            <th>Y/C</th>
            <th>Att</th>
            <th>Yds</th>
            <th>Y/A</th>
            <th>TD</th>
            <th>1D</th>
          </tr>
        </thead>
        <tbody>
          {h2hstats.map((item) => (
            <tr key={item.Rk} className="bg-accent">
              <th>{item.Rk}</th>
              <td>{item.Player}</td>
              <td>{item.Team}</td>
              <td>{item.Date}</td>
              <th>{item.Cmp}</th>
              <th>{item.Att}</th>
              <th>{item.Inc}</th>
              <th>{item.CmpP}</th>
              <th>{item.Yds}</th>
              <th>{item.TD}</th>
              <th>{item.Int}</th>
              <th>{item.Pick6}</th>
              <th>{item.TDP}</th>
              <th>{item.IntP}</th>
              <th>{item.Rate}</th>
              <th>{item.Sk}</th>
              <th>{item.YdsLost}</th>
              <th>{item.SkP}</th>
              <th>{item.YA}</th>
              <th>{item.AYA}</th>
              <th>{item.ANYA}</th>
              <th>{item.YC}</th>
              <th>{item.RAtt}</th>
              <th>{item.RYds}</th>
              <th>{item.RYA}</th>
              <th>{item.RTD}</th>
              <th>{item.R1D}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
