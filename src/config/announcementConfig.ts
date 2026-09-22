import rawAnnouncement from "../data/announcement.json";
import type { AnnouncementConfig } from "../types/config";
import { asRecord, bool, oneOf, str } from "../utils/cms-value";

/**
 * 侧栏公告栏由后台（Sveltia CMS）写进 `src/data/announcement.json`。
 *
 * 注意：公告的「是否显示」由侧栏组件开关（sidebarConfig）控制，这里只管内容。
 */
const announcement = asRecord(rawAnnouncement);

function readLink(): AnnouncementConfig["link"] {
	const raw = asRecord(announcement?.link);
	if (!raw) return undefined;
	return {
		enable: bool(raw.enable, false),
		text: str(raw.text, ""),
		url: str(raw.url, ""),
		external: bool(raw.external, false),
	};
}

export const announcementConfig: AnnouncementConfig = {
	// title 留空时主题会退回 i18n 里的默认标题
	title: str(announcement?.title, ""),
	content: str(
		announcement?.content,
		"本站聚焦算力、芯片与大模型产业链，内容基于公开信息整理，持续更新。",
	),
	icon: str(announcement?.icon, ""),
	type: oneOf(
		announcement?.type,
		["info", "warning", "success", "error"] as const,
		"info",
	),
	closable: bool(announcement?.closable, true),
	link: readLink(),
};
