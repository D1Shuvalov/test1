import {CSSProperties} from "react";
import {Type, Status, DashboardProps} from '../../types/type';
import {formatTestStatus, formatTestType, STATUS_TO_COLOR_MAP, URL_TO_COLOR_MAP} from "../../shared/consts";
import {Button} from "../../shared/Button/Button";
import * as ROUTE_PATHS from '../../app/router/routesPaths/paths';
import './Dashboard.css'

const getBorderColorBySiteUrl = (url: string): string => {
  return URL_TO_COLOR_MAP.get(url) ?? 'black';
};

export const Dashboard = ({
                            tests,
                            sites,
                            onSort,
                            onReset,
                            sortOrder,
                            onTypeSortChange,
                            selectedType
                          }: DashboardProps) => {
  return (
    <>
      {tests.length ? (
        <table>
          <thead>
          <tr>
            <th onClick={() => onSort('name', sortOrder)}>NAME</th>
            <th>
              <select onChange={onTypeSortChange} value={selectedType}>
                <option key='all' value='ALL'>TYPE</option>
                <option key='classic' value={Type.CLASSIC}>Classic</option>
                <option key='server' value={Type.SERVER_SIDE}>Server Side</option>
                <option key='mvt' value={Type.MVT}>MVT</option>
              </select>
            </th>
            <th onClick={() => onSort('status', sortOrder)}>STATUS</th>
            <th onClick={() => onSort('siteId', sortOrder)}>SITE</th>
          </tr>
          </thead>
          <tbody>
          {tests.map((test) => {
            const site = sites.find((site) => site.id === test.siteId);
            return (
              <tr key={test.id}>
                <td style={{'--border-color': getBorderColorBySiteUrl(site?.url || '')} as CSSProperties}>
                  {test.name}
                </td>
                <td>
                  {formatTestType(test.type)}
                </td>
                <td style={{
                  color: STATUS_TO_COLOR_MAP[test.status as keyof typeof STATUS_TO_COLOR_MAP] || 'black'
                }}>
                  {formatTestStatus(test.status)}
                </td>
                <td>
                  {site?.url.replace(/^https?:\/\//, '').replace(/^www\./, '')}
                </td>
                <td>
                  {test.status === Status.DRAFT ? (
                    <Button
                      to={ROUTE_PATHS.FINALIZE.replace(':id', String(test.id))}
                      label="Finalize"
                      className="finalize"
                    />
                  ) : (
                    <Button
                      to={ROUTE_PATHS.RESULTS.replace(':id', String(test.id))}
                      label="Results"
                      className="results"
                    />
                  )}
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      ) : (
        <div className='no-results'>
          <h3 className='warning-title'>Your search did not match any results.</h3>
          <Button label='Reset' className='results' onClick={onReset}/>
        </div>
      )}
    </>
  );
};
