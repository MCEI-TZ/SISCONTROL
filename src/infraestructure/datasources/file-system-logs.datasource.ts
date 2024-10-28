import fs from "fs";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class FileSystemDataSource implements LogDatasource {
  private readonly logPath = "logs/";
  private readonly allLogsPath = "logs/logs-low.log";
  private readonly mediumLogsPath = "logs/logs-medium.log";
  private readonly highLogsPath = "logs/logs-high.log";

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach(
      (path) => {
        if (fs.existsSync(path)) return;

        fs.writeFileSync(path, "");
      }
    );
  };

  async saveLog(newlog: LogEntity): Promise<void> {
    const logAsJson = `${JSON.stringify(newlog)}\n`;
    fs.appendFileSync(this.allLogsPath, logAsJson);

    if (newlog.level === LogSeverityLevel.low) return;

    if (newlog.level === LogSeverityLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, logAsJson);
    } else {
      fs.appendFileSync(this.highLogsPath, logAsJson);
    }
  }

  private getLogsFromFile = (path: string): LogEntity[] => {
    const content = fs.readFileSync(path, "utf-8");
    if (content === "") return [];

    const logs = content.split("\n").map(LogEntity.fromJson);
    return logs;
  };

  async getLogs(serverityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    switch (serverityLevel) {
      case LogSeverityLevel.low:
        return this.getLogsFromFile(this.allLogsPath);
      case LogSeverityLevel.medium:
        return this.getLogsFromFile(this.mediumLogsPath);
      case LogSeverityLevel.high:
        return this.getLogsFromFile(this.highLogsPath);
      default:
        throw new Error(`${serverityLevel} not implemented`);
    }
  }
}
