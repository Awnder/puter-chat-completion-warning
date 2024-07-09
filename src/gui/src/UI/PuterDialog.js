/*
 * Copyright (C) 2024 Puter Technologies Inc.
 *
 * This file is part of Puter.
 *
 * Puter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/**
 * Copyright (C) 2024 Puter Technologies Inc.
 *
 * This file is part of Puter.
 *
 * Puter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import UIWindow from './UIWindow.js'

async function PuterDialog(options) {
    return new Promise(async (resolve) => {
        let h = '';
        h += `<div class="puter-auth-dialog-content">
        <a href="https://puter.com" target="_blank" style="border:none; outline:none; display: block; width: 70px; height: 70px; margin: 0 auto; border-radius: 4px;"><img style="display: block; width: 70px; height: 70px; margin: 0 auto; border-radius: 4px;" src="data:image/png;base64,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"/></a>
        <p class="about">This website uses Puter to bring you safe, secure, and private AI and Cloud features.</p>
        <div class="buttons">
            <button class="button button-auth" id="launch-auth-popup-cancel">${i18n('cancel')}</button>
            <button class="button button-primary button-auth" id="launch-auth-popup" style="margin-left:10px;">${i18n('continue')}</button>
        </div>
        <p style="text-align: center; font-size: 14px;">${i18n('powered_by_puter_js', [], false)}</p>
        <p class="launch-auth-popup-footnote">${i18n('tos_fineprint')}</p>
        </div>`;

        const el_window = await UIWindow({
            title: `Upload`,
            icon: window.icons[`app-icon-uploader.svg`],
            uid: null,
            is_dir: false,
            body_content: h,
            has_head: false,
            selectable_body: false,
            draggable_body: true,
            allow_context_menu: false,
            is_resizable: false,
            is_droppable: false,
            init_center: true,
            allow_native_ctxmenu: false,
            allow_user_select: false,
            window_class: 'window-puter-dialog window-cover-page',
            width: '100%',
            top: '0',
            dominant: true,
            window_css:{
                height: '100%',
                width: '100%',
                top: '0 !important',
                left: '0 !important',
            },
            body_css: {
                padding: '22px',
                width: 'initial',
                'background-color': 'rgba(231, 238, 245, .95)',
                'backdrop-filter': 'blur(3px)',
            }    
        });

        $(el_window).find('#launch-auth-popup').on('click submit', function (e) {
            $(el_window).close();
            resolve(true);
        })

        $(el_window).find('#launch-auth-popup-cancel').on('click submit', function (e) {
            $(el_window).close();
            resolve(false);
        })
    })
}
// export as default
export default PuterDialog;
