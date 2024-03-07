
import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
    Appearance,
    Platform
} from 'react-native';
import {
    BottomSheetModal,
    BottomSheetBackdrop,
    BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { format } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Swipeable } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';
import { BORDERRADIUS, COLORS, SPACING } from '@/themes/theme';
import AddTask from '@/components/AddTask';
import styles from './styles';
import TaskListContainer from '@/components/TaskContainer';
import SearchBar from '@/components/SearchTodo';
import EditTodoModal from '@/components/Modal';

interface TodoItem {
    id: string;
    text: string;
}

const currentDate = new Date();
const formattedDate = format(currentDate, 'MMMM dd, yyyy');

const TaskScreen: React.FC = () => {
    const [todoInput, setTodoInput] = useState<string>('');
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [filteredTodos, setFilteredTodos] = useState<TodoItem[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
    const [userName, setUserName] = useState<string>('');

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['15%'], []);

    // State to track the current theme
    const [theme, setTheme] = useState(Appearance.getColorScheme());

    // Function to toggle between light and dark mode
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };


    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
        []
    );

    // Load todos from AsyncStorage on component mount
    useEffect(() => {
        const loadTodos = async () => {
            try {
                const storedTodos = await AsyncStorage.getItem('todos');
                if (storedTodos !== null) {
                    setTodos(JSON.parse(storedTodos));
                }
            } catch (error) {
                console.error('Error loading todos from AsyncStorage:', error);
            }
        };

        loadTodos();
    }, []);

    // Save todos to AsyncStorage whenever it changes
    useEffect(() => {
        const saveTodos = async () => {
            try {
                await AsyncStorage.setItem('todos', JSON.stringify(todos));
            } catch (error) {
                console.error('Error saving todos to AsyncStorage:', error);
            }
        };
        saveTodos();
    }, [todos]); // Only re-run the effect if todos change

    // Retrieve user name from AsyncStorage on component mount
    useEffect(() => {
        const retrieveUserName = async () => {
            try {
                const fullName = await AsyncStorage.getItem('name');
                if (fullName) {
                    // Extract the first name from the full name
                    const firstName = fullName.split(' ')[0];
                    setUserName(firstName);
                }
            } catch (error) {
                console.error("Error retrieving user name:", error);
            }
        };

        retrieveUserName();
    }, []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    // add to do
    const handleAddTodo = () => {
        if (todoInput.trim() === '') {
            Alert.alert('Task cannot be empty! 😤')
            return
        }
        const newTodo: TodoItem = { id: Date.now().toString(), text: todoInput };
        Alert.alert('Task added 💙')
        setTodos([...todos, newTodo]);
        setTodoInput('');
    };

    // delete todo
    const handleDeleteTodo = (id: string) => {
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this task?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        const updatedTodos = todos.filter(todo => todo.id !== id);
                        setTodos(updatedTodos);
                        setFilteredTodos(filteredTodos.filter(todo => todo.id !== id)); // Update filtered todos
                        Alert.alert("Task deleted successfully.");
                    },
                    style: 'destructive'
                }
            ]
        );
    };

    // done task
    const handleDoneTodo = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        setFilteredTodos(filteredTodos.filter(todo => todo.id !== id)); // Update filtered todos
        Alert.alert('Done your task 🤗')
    };

    // edit task
    const handleEditTodo = (id: string, newText: string) => {
        // Check if newText is empty, if so, return without updating the todo
        if (!newText.trim()) {
            Alert.alert('Empty Text', 'Please enter some text for the task.');
            return;
        }

        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
        );
        Alert.alert('Edit task successfully. 🤗')
    };

    const openEditModal = (id: string) => {
        setSelectedTodoId(id);
        setIsModalVisible(true);
    };

    const closeEditModal = () => {
        setIsModalVisible(false);
        setSelectedTodoId(null);
    };

    // Search function to filter todos based on search text
    const handleSearch = (text: string) => {
        const filtered = todos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase()));
        setFilteredTodos(filtered);

        // Display an alert if there are no search results
        if (filtered.length === 0) {
            Alert.alert('No Results', 'No tasks found in your searching.');
        }
    };

    const renderItem = ({ item }: { item: TodoItem }) => {

        const renderRightActions = () => (
            <>
                <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}
                    style={styles.deleteButton}>
                    <Feather name="trash-2" size={20} color={COLORS.primaryWhite} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openEditModal(item.id)}
                    style={[styles.deleteButton, styles.updateButton]}>
                    <Feather name="edit" size={20} color={COLORS.primaryWhite} />
                </TouchableOpacity>
            </>
        );

        return (
            <Swipeable renderRightActions={renderRightActions}>
                <TaskListContainer title={item.text}
                    onPress={() => handleDoneTodo(item.id)}
                    todoStyleContainer={{
                        backgroundColor: theme === 'light' ? COLORS.primaryBlack : COLORS.primaryWhite,
                    }}
                />
            </Swipeable>
        );
    };

    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor: theme === 'light' ? COLORS.primaryBlack : COLORS.primaryWhite
        }]}>
            <View style={styles.headerDateContainer}>
                <Text style={[styles.headerDate, {
                    color: `${theme === 'light' ? COLORS.primaryWhite : COLORS.primaryBlack}`
                }]}>Hi, {userName} ✋</Text>
                <Text style={styles.headerDateNow}>Today is {formattedDate}</Text>
            </View>
            <View style={styles.headerToggleDarkMode}>
                <TouchableOpacity onPress={toggleTheme}>
                    <Ionicons
                        name={theme === 'light' ? 'sunny' : 'moon'}
                        size={30}
                        color={theme === 'light' ? 'yellow' : COLORS.primaryDarkGray} // Change color based on theme
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
                <SearchBar onSearch={handleSearch} style={{
                    backgroundColor: `${theme === 'light' ? '#0c4a6e' : COLORS.primaryWhite}`
                }}
                    textStyle={{
                        color: `${theme === 'light' ? COLORS.primaryWhite : COLORS.primaryBlack}`
                    }}
                    placeholderTextColor={theme === 'light' ? COLORS.primaryWhite : COLORS.primaryDarkGray}
                />
                <TouchableOpacity style={[styles.filterContainer, {
                    backgroundColor: `${theme === 'light' ? '#0c4a6e' : COLORS.primaryWhite}`
                }]}>
                    <SimpleLineIcons name="equalizer" size={24}
                        color={theme === 'light' ? COLORS.primaryWhite : COLORS.primaryDarkGray} // Change color based on theme
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
                data={filteredTodos.length > 0 ? filteredTodos : todos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={() => (
                    <View style={{
                        alignItems: 'center', backgroundColor: `${theme === 'light' ? COLORS.primaryBlack : COLORS.primaryWhite}`,
                    }}>
                        <ConfettiCannon
                            count={200}
                            origin={{ x: -10, y: 0 }}
                            explosionSpeed={500}
                            fadeOut={true}
                        />
                        <Image
                            source={require('@/assets/images/completedtask.png')}
                            resizeMode='contain'
                            style={styles.imageCompleted} />
                        <View style={styles.completedContainer}>
                            <Text style={[styles.completedTitle, {
                                color: `${theme === 'light' ? COLORS.primaryWhite : COLORS.primaryBlack}`
                            }]}>
                                You're all done for today! #TodoistZero
                            </Text>
                            <Text style={[styles.completedSubTitle, {
                                color: `${theme === 'light' ? COLORS.primaryWhite : COLORS.primaryBlack}`
                            }]}>
                                Enjoy the rest of your day.
                            </Text>
                        </View>
                    </View>
                )}
            />
            <EditTodoModal
                visible={isModalVisible}
                onEdit={(newText: string) => {
                    if (selectedTodoId) {
                        handleEditTodo(selectedTodoId, newText);
                    }
                }}
                onClose={closeEditModal}
                initialText={todos.find(todo => todo.id === selectedTodoId)?.text || ''}
            />
            <BottomSheetModal
                backdropComponent={renderBackdrop}
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                handleIndicatorStyle={{ backgroundColor: theme === 'light' ? COLORS.primaryBlack : COLORS.primaryWhite }}
                backgroundStyle={{ backgroundColor: theme === 'light' ? COLORS.primaryBlack : COLORS.primaryWhite }}
            >
                <BottomSheetTextInput
                    placeholderTextColor={theme === 'light' ? COLORS.primaryWhite : COLORS.primaryDarkGray}
                    placeholder='Input new task here'
                    style={[styles.textInputTodo, {
                        color: `${theme === 'light' ? COLORS.primaryWhite : COLORS.primaryBlack}`
                    }]}
                    autoFocus={true}
                    enterKeyHint='enter'
                    enablesReturnKeyAutomatically={true}
                    value={todoInput}
                    onChangeText={text => setTodoInput(text)}
                />
                <AddTask
                    checkIcon
                    onPress={handleAddTodo}
                    style={{ bottom: 40 }}
                />
            </BottomSheetModal>
            <AddTask addIcon onPress={handlePresentModalPress} />
        </SafeAreaView >
    );
};



export default TaskScreen;

