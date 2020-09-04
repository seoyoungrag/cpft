package kr.co.teamfresh.cpft.truckowner.web.backend.util;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.hibernate.collection.internal.PersistentSet;
import org.modelmapper.Condition;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.modelmapper.spi.MappingContext;

import kr.co.teamfresh.cpft.truckowner.web.backend.config.modelmap.mapper.OrderDtoToEnMap;
import kr.co.teamfresh.cpft.truckowner.web.backend.config.modelmap.mapper.OrderEnToDtoMap;
import kr.co.teamfresh.cpft.truckowner.web.backend.config.modelmap.mapper.OrderTruckOwnerEnToDtoForApplicationListMap;
import kr.co.teamfresh.cpft.truckowner.web.backend.config.modelmap.mapper.OrderTruckOwnerEnToDtoForOwnerTruckListMap;
import kr.co.teamfresh.cpft.truckowner.web.backend.config.modelmap.mapper.TruckOwnerEnToForApplicationListDtoMap;
import kr.co.teamfresh.cpft.truckowner.web.backend.config.modelmap.mapper.TruckOwnerEnToForTruckOwnerListDtoMap;
import kr.co.teamfresh.cpft.truckowner.web.backend.config.modelmap.mapper.WorkGroupEnToDtoMap;

public class ObjectMapperUtils {

	private static ModelMapper modelMapper = kr.co.teamfresh.cpft.common.util.ObjectMapperUtils.getModelMapper();
	/**
	 * Model mapper property setting are specified in the following block. Default
	 * property matching strategy is set to Strict see {@link MatchingStrategies}
	 * Custom mappings are added using {@link ModelMapper#addMappings(PropertyMap)}
	 */
	static {
		modelMapper.addMappings(new OrderDtoToEnMap());
		modelMapper.addMappings(new OrderEnToDtoMap());
		modelMapper.addMappings(new TruckOwnerEnToForApplicationListDtoMap());
		modelMapper.addMappings(new TruckOwnerEnToForTruckOwnerListDtoMap());
		modelMapper.addMappings(new OrderTruckOwnerEnToDtoForApplicationListMap());
		modelMapper.addMappings(new OrderTruckOwnerEnToDtoForOwnerTruckListMap());
		modelMapper.addMappings(new WorkGroupEnToDtoMap());
		//modelMapper.addConverter(new OrderDtoToOrderEnCv());
	}

	/**
	 * Hide from public usage.
	 */
	private ObjectMapperUtils() {
	}

	/**
	 * <p>
	 * Note: outClass object must have default constructor with no arguments
	 * </p>
	 *
	 * @param <D>      type of result object.
	 * @param <T>      type of source object to map from.
	 * @param entity   entity that needs to be mapped.
	 * @param outClass class of result object.
	 * @return new object of <code>outClass</code> type.
	 */
	public static <D, T> D map(final T entity, Class<D> outClass) {
		return modelMapper.map(entity, outClass);
	}

	/**
	 * <p>
	 * Note: outClass object must have default constructor with no arguments
	 * </p>
	 *
	 * @param entityList list of entities that needs to be mapped
	 * @param outCLass   class of result list element
	 * @param <D>        type of objects in result list
	 * @param <T>        type of entity in <code>entityList</code>
	 * @return list of mapped object with <code><D></code> type.
	 */
	public static <D, T> List<D> mapAll(final Collection<T> entityList, Class<D> outCLass) {
		return entityList.stream().map(entity -> map(entity, outCLass)).collect(Collectors.toList());
	}

	/**
	 * Maps {@code source} to {@code destination}.
	 *
	 * @param source      object to map from
	 * @param destination object to map to
	 */
	public static <S, D> D map(final S source, D destination) {
		modelMapper.map(source, destination);
		return destination;
	}
}
