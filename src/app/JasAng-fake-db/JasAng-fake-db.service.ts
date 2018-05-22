import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ContactsFakeDb } from './contacts';
import { TodoFakeDb } from './todo';
import { ProfileFakeDb } from './profile';
import { SearchFakeDb } from './search';
import { IconsFakeDb } from './icons';
import { QuickPanelFakeDb } from './quick-panel';

export class JasAngFakeDbService implements InMemoryDbService {
    createDb() {
        return {


            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user': ContactsFakeDb.user,

            // Todo
            'todo-todos': TodoFakeDb.todos,
            'todo-filters': TodoFakeDb.filters,
            'todo-tags': TodoFakeDb.tags,

            // Profile
            'profile-timeline': ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about': ProfileFakeDb.about,

            // Search
            'search-classic': SearchFakeDb.classic,
            'search-table': SearchFakeDb.table,

            // Icons
            'icons': IconsFakeDb.icons,

            // Quick Panel
            'quick-panel-notes': QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
