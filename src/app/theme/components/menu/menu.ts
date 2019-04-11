import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu (2, 'Crm', null, null, 'more_horiz', null, true, 0),
    new Menu (3, 'Relaties', 'crm/relaties', null, 'more_horiz', null, false, 2),
    new Menu (4, 'Contactpersonen', 'crm/contactpersonen', null, 'more_horiz', null, false, 2),
    new Menu (5, 'Concurrenten', 'crm/concurrenten', null, 'more_horiz', null, false, 2),
    new Menu (6, 'Dealers', 'crm/dealers', null, 'more_horiz', null, false, 2),
    new Menu (7, 'Leveradressen', 'crm/leveradressen', null, 'more_horiz', null, false, 2),
    new Menu (8, 'algemeen', null, null, 'folder_open', null, true, 2),
    new Menu (9, 'Adressen', 'crm/adressen', null, 'more_horiz', null, false, 8),
    new Menu (10, 'Staten/Provincies', 'crm/staten-provincies', null, 'more_horiz', null, false, 8),
    new Menu (11, 'Landen', 'crm/landen', null, 'more_horiz', null, false, 8),
    new Menu (12, 'Talen', 'crm/talen', null, 'more_horiz', null, false, 8),
    new Menu (13, 'Relatietypes', 'crm/relatietypes', null, 'more_horiz', null, false, 8),
    new Menu (14, 'Rechtsvormen', 'crm/rechtsvormen', null, 'more_horiz', null, false, 8),
    new Menu (15, 'Titles', 'crm/titles', null, 'more_horiz', null, false, 8),
    new Menu (16, 'Functies', 'crm/functies', null, 'more_horiz', null, false, 8), 
  //  new Menu (17, 'Users', '/users', null, 'supervisor_account', null, false, 0), 
]

export const horizontalMenuItems = []