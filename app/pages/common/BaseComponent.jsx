import { Component } from 'react'
import { getLanguageContent } from '../../util/languageSettingHelpers'

export default class BaseComponent extends Component {

	getContent(id, lan) {
		return getLanguageContent(id, lan)
	}
}