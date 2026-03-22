const TabbedComponent = (function() {
    let container;
    let tabsData;
    let callback;

    function createTabs() {
        const tabContainer = document.createElement('div');
        tabContainer.className = 'tab-container';

        const tabHeader = document.createElement('div');
        tabHeader.className = 'tab-header';
        tabContainer.appendChild(tabHeader);

        tabsData.forEach((tab, index) => {
            const tabElement = document.createElement('div');
            tabElement.className = 'tab';
            tabElement.textContent = tab.tabname;
            tabElement.dataset.index = index;
            if (index === 0) tabElement.classList.add('active');
            tabHeader.appendChild(tabElement);

            const tabContent = document.createElement('div');
            tabContent.className = 'tab-content';
            tabContent.textContent = tab.tabcontent;
            if (index === 0) tabContent.classList.add('active');
            tabContainer.appendChild(tabContent);
        });

        container.appendChild(tabContainer);

        tabHeader.addEventListener('click', function(event) {
            if (event.target.classList.contains('tab')) {
                switchTab(event.target.dataset.index);
            }
        });
    }

    function switchTab(index) {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab-content');

        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i == index);
        });

        contents.forEach((content, i) => {
            content.classList.toggle('active', i == index);
        });

        if (callback) {
            callback();
        }
    }

    return {
        Init: function({ container: containerSelector, data, onSwitch }) {
            container = document.querySelector(containerSelector);
            tabsData = data;
            callback = onSwitch;
            createTabs();
        },
        SelectTab: function(index) {
            switchTab(index);
        }
    };
})();

// Initialize the tabbed component
TabbedComponent.Init({
    container: '#tab_container',
    data: [
        { tabname: "Tab1", tabcontent: "Tab content 1" },
        { tabname: "Tab2", tabcontent: "Tab content 2" },
        { tabname: "Tab3", tabcontent: "Tab content 3" }
    ],
    onSwitch: function() {
        console.log('Callback function invoked when switching tabs');
    }
});

// Example usage of the additional API to select a tab programmatically
// TabbedComponent.SelectTab(1);