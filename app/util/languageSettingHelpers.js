import { ENTranslations } from '../localization/lan_en'
import { ZHTranslations } from '../localization/lan_zh'

export function getLanguageContent(id, lan) {
	if (!lan) {
		return '{' + id + '}'
	}
	else if (!lan.startsWith('en')) {
		return getContent(id, ZHTranslations)
	}
	return getContent(id, ENTranslations)
}

function getContent(id, lanPack) {
	if (!lanPack[id]) {
		return '{' + id + '}'
	}
	return lanPack[id]
}
