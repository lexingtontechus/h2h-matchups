"use client";

const h2hstats = [
  {
    Rk: "1",
    Player: "Stephen Curry",
    Team: "GSW",
    Date: "2023-03-17",
    GS: "*",
    MP: "37",
    FG: "12",
    FGA: "27",
    FGP: ".444",
    TWOP: "8",
    TWOPA: "14",
    TWOPP: ".571",
    TREP: "4",
    TREPA: "13",
    TREPP: ".308",
    FT: "3",
    FTA: "3",
    FTP: "1.000",
    TSP: ".547",
    ORB: "2",
    DRB: "4",
    TRB: "6",
    AST: "5",
    STL: "0",
    BLK: "0",
    TOV: "6",
    PF: "2",
    PTS: "31",
    GmSc: "16.2",
    BPM: "-2.5",
    PlusMinus: "-1",
    PlayerAdditional: "curryst01",
  },
  {
    Rk: "2",
    Player: "Trae Young",
    Team: "ATL",
    Date: "2023-03-17",
    GS: "*",
    MP: "32",
    FG: "8",
    FGA: "18",
    FGP: ".444",
    TWOP: "5",
    TWOPA: "12",
    TWOPP: ".417",
    TREP: "3",
    TREPA: "6",
    TREPP: ".500",
    FT: "6",
    FTA: "7",
    FTP: ".857",
    TSP: ".593",
    ORB: "1",
    DRB: "5",
    TRB: "6",
    AST: "12",
    STL: "1",
    BLK: "0",
    TOV: "4",
    PF: "1",
    PTS: "25",
    GmSc: "22.4",
    BPM: "6.8",
    PlusMinus: "13",
    PlayerAdditional: "youngtr01",
  },
  ,
  {
    Rk: "3",
    Player: "Stephen Curry",
    Team: "GSW",
    Date: "2021-11-08",
    GS: "*",
    MP: "35",
    FG: "14",
    FGA: "28",
    FGP: ".500",
    TWOP: "5",
    TWOPA: "9",
    TWOPP: ".556",
    TREP: "9",
    TREPA: "19",
    TREPP: ".474",
    FT: "13",
    FTA: "13",
    FTP: "1.000",
    TSP: ".741",
    ORB: "2",
    DRB: "5",
    TRB: "7",
    AST: "10",
    STL: "4",
    BLK: "1",
    TOV: "2",
    PF: "0",
    PTS: "50",
    GmSc: "48.6",
    BPM: "32.0",
    PlusMinus: "31",
    PlayerAdditional: "curryst01",
  },
  {
    Rk: "4",
    Player: "Trae Young",
    Team: "ATL",
    Date: "2021-11-08",
    GS: "*",
    MP: "32",
    FG: "11",
    FGA: "20",
    FGP: ".550",
    TWOP: "7",
    TWOPA: "12",
    TWOPP: ".583",
    TREP: "4",
    TREPA: "8",
    TREPP: ".500",
    FT: "2",
    FTA: "3",
    FTP: "0.667",
    TSP: ".657",
    ORB: "0",
    DRB: "3",
    TRB: "3",
    AST: "9",
    STL: "1",
    BLK: "0",
    TOV: "4",
    PF: "2",
    PTS: "28",
    GmSc: "21.4",
    BPM: "7.2",
    PlusMinus: "-9",
    PlayerAdditional: "youngtr01",
  },
  {
    Rk: "5",
    Player: "Stephen Curry",
    Team: "GSW",
    Date: "2021-04-04",
    GS: "*",
    MP: "28",
    FG: "3",
    FGA: "11",
    FGP: ".273",
    TWOP: "3",
    TWOPA: "7",
    TWOPP: ".429",
    TREP: "0",
    TREPA: "4",
    TREPP: ".000",
    FT: "7",
    FTA: "8",
    FTP: ".875",
    TSP: ".448",
    ORB: "0",
    DRB: "2",
    TRB: "2",
    AST: "3",
    STL: "1",
    BLK: "0",
    TOV: "7",
    PF: "1",
    PTS: "13",
    GmSc: "2.4",
    BPM: "-14.1",
    PlusMinus: "-8",
    PlayerAdditional: "curryst01",
  },
  {
    Rk: "6",
    Player: "Trae Young",
    Team: "ATL",
    Date: "2021-04-04",
    GS: "*",
    MP: "28",
    FG: "3",
    FGA: "11",
    FGP: ".273",
    TWOP: "3",
    TWOPA: "7",
    TWOPP: ".429",
    TREP: "0",
    TREPA: "4",
    TREPP: ".000",
    FT: "7",
    FTA: "8",
    FTP: "0.875",
    TSP: ".448",
    ORB: "0",
    DRB: "2",
    TRB: "2",
    AST: "3",
    STL: "1",
    BLK: "0",
    TOV: "7",
    PF: "1",
    PTS: "13",
    GmSc: "2.4",
    BPM: "-14.1",
    PlusMinus: "-8",
    PlayerAdditional: "youngtr01",
  },
  {
    Rk: "7",
    Player: "Stephen Curry",
    Team: "GSW",
    Date: "2018-12-03",
    GS: "*",
    MP: "29",
    FG: "10",
    FGA: "17",
    FGP: ".588",
    TWOP: "4",
    TWOPA: "7",
    TWOPP: ".571",
    TREP: "6",
    TREPA: "10",
    TREPP: ".600",
    FT: "4",
    FTA: "4",
    FTP: "1.000",
    TSP: ".800",
    ORB: "0",
    DRB: "3",
    TRB: "3",
    AST: "2",
    STL: "1",
    BLK: "1",
    TOV: "3",
    PF: "4",
    PTS: "30",
    GmSc: "21.5",
    BPM: "6.9",
    PlusMinus: "22",
    PlayerAdditional: "curryst01",
  },

  {
    Rk: "8",
    Player: "Trae Young",
    Team: "ATL",
    Date: "2018-12-03",
    GS: "*",
    MP: "25",
    FG: "8",
    FGA: "20",
    FGP: ".400",
    TWOP: "8",
    TWOPA: "15",
    TWOPP: ".533",
    TREP: "0",
    TREPA: "5",
    TREPP: ".000",
    FT: "4",
    FTA: "6",
    FTP: "0.667",
    TSP: ".442",
    ORB: "0",
    DRB: "0",
    TRB: "0",
    AST: "3",
    STL: "0",
    BLK: "0",
    TOV: "7",
    PF: "1",
    PTS: "20",
    GmSc: "3.1",
    BPM: "-17.3",
    PlusMinus: "-3",
    PlayerAdditional: "youngtr01",
  },
];

export default function H2HStats() {
  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-center">Head To Head MatchUp</h2>
      <table className="table table-zebra table-xs">
        {/* head */}
        <thead>
          <tr>
            <th>Rk</th>
            <th>Player</th>
            <th>Team</th>
            <th>Date</th>
            <th>GS</th>
            <th>MP</th>
            <th>FG</th>
            <th>FGA</th>
            <th>FG%</th>
            <th>2P</th>
            <th>2PA</th>
            <th>2P%</th>
            <th>3P</th>
            <th>3PA</th>
            <th>3P%</th>
            <th>FT</th>
            <th>FTA</th>
            <th>FT%</th>
            <th>TS%</th>
            <th>ORB</th>
            <th>DRB</th>
            <th>TRB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>TOV</th>
            <th>PF</th>
            <th>PTS</th>
            <th>GmSc</th>
            <th>BPM</th>
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>
          {h2hstats.map((item) => (
            <tr key={item.Rk} className="bg-accent">
              <th>{item.Rk}</th>
              <td>{item.Player}</td>
              <td>{item.Team}</td>
              <td>{item.Date}</td>
              <th>{item.GS}</th>
              <th>{item.MP}</th>
              <th>{item.FG}</th>
              <th>{item.FGA}</th>
              <th>{item.FGP}</th>
              <th>{item.TWOP}</th>
              <th>{item.TWOPA}</th>
              <th>{item.TWOPP}</th>
              <th>{item.TREP}</th>
              <th>{item.TREPA}</th>
              <th>{item.TREPP}</th>
              <th>{item.FT}</th>
              <th>{item.FTA}</th>
              <th>{item.FTP}</th>
              <th>{item.TSP}</th>
              <th>{item.ORB}</th>
              <th>{item.DRB}</th>
              <th>{item.TRB}</th>
              <th>{item.AST}</th>
              <th>{item.STL}</th>
              <th>{item.BLK}</th>
              <th>{item.TOV}</th>
              <th>{item.PF}</th>
              <th>{item.PTS}</th>
              <th>{item.GmSc}</th>
              <th>{item.BPM}</th>
              <th>{item.PlusMinus}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
