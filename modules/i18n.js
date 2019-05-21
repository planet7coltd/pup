import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import i18n from 'meteor/universe:i18n';
import './locale/en-US.i18n.json';
import './locale/zh-CN.i18n.json';

function getLocale() {
  const defaultLang = 'zh-CN';
  const locales = ['en-US', 'zh-CN', defaultLang];

  const clientLang = Meteor.isClient
    ? (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.userLanguage
    : defaultLang;

  let result = clientLang || defaultLang;

  if (!locales.includes(result)) {
    result = defaultLang;
  }

  return result;
}

const defaultLocale = getLocale();

i18n.setOptions({
  defaultLocale,
  sameLocaleOnServerConnection: true,
});

if (Meteor.isClient) {
  Meteor.startup(() => {
    Tracker.autorun(() => {
      const user = Meteor.user();

      if (user) {
        const locale = user.profile.lang || defaultLocale;
        i18n.setLocale(locale);
      } else {
        i18n.setLocale(defaultLocale);
      }
    });
  });
}
