import * as uuid from 'uuid';

export abstract class DataService<DataT extends { id: string }> {
    key: string;
    data: Map<string, DataT> = new Map();

    /**
     * Constructor that saves Map of data to local storage.
     * @param key name of Map/storage data
     */
    constructor(key: string) {
        this.key = key;
        const json = localStorage.getItem(key);
        if (json !== null) {
            this.data = JSON.parse(json, this.reviver);
        }
    }

    /**
     * Fetches array of all DataTs
     * @returns DataT array of current DataTs
     */
    getAll(): DataT[] {
        // Function to return all DataTs with no qualifications
        return [...this.data].map((data) => data[1]);
    }

    /**
     * Fetches a DataT by id
     * @returns DataT array of current favorite DataTs
     */
    getById(dataId: string): DataT {
        // Function to return all DataTs with no qualifications
        return this.data.get(dataId)!;
    }

    /**
     * Deletes chosen DataT object
     * @param dataId ID of DataT object to be removed
     */
    delete(dataId: string) {
        this.data.delete(dataId);
        localStorage.setItem(this.key, JSON.stringify(this.data, this.replacer));
    }

    /**
     * Adds a DataT Object to add to the DataT map
     * @param DataT  DataT Object to add to DataT map
     */
    create(data: DataT): DataT {
        data.id = uuid.v4();
        this.data.set(data.id, data);
        localStorage.setItem(this.key, JSON.stringify(this.data, this.replacer));
        return data;
    }

    /**
     * Checks if DataT map is empty
     * @returns true if empty, otherwise false
     */
    isEmpty(): boolean {
        if (this.data.size === 0) {
            return true;
        }
        return false;
    }

    /**
     * Searches through dataMap to find DataT by name
     * @param findName Name of superhero to find in dataMap
     * @returns DataT object found in dataMap with same name, else
     *   undefined
     */
    // Only searching through predefined lists
    // search(findName: string): DataT | undefined {
    //     for (let index = 0; index < Superheroes.length; index++) {
    //         if (findName.toLowerCase == Superheroes[index].name.toLowerCase) {
    //             return Superheroes[index];
    //         }
    //     }
    //     return undefined;
    // }

    /**
     * Updates a DataT object to new DataT object passed in with same id
     * @param id  DataT Object to update
     * @returns updated DataT object
     */
    update(data: DataT): DataT {
        this.data.set(data.id, data);
        localStorage.setItem(this.key, JSON.stringify(this.data, this.replacer));
        return data;
    }

    private replacer(key: any, value: any) {
        if (value instanceof Map) {
            return {
                dataType: 'Map',
                value: Array.from(value.entries()), // or with spread: value: [...value]
            };
        } else {
            return value;
        }
    }
    private reviver(key: any, value: any) {
        if (typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
                return new Map(value.value);
            }
        }
        return value;
    }
}
