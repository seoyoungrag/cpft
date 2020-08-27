
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>ArrayOfEMAILPUBLICKEY complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfEMAILPUBLICKEY"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="EMAILPUBLICKEY" type="{http://ws.baroservice.com/}EMAILPUBLICKEY" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfEMAILPUBLICKEY", propOrder = {
    "emailpublickey"
})
public class ArrayOfEMAILPUBLICKEY {

    @XmlElement(name = "EMAILPUBLICKEY", nillable = true)
    protected List<EMAILPUBLICKEY> emailpublickey;

    /**
     * Gets the value of the emailpublickey property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the emailpublickey property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getEMAILPUBLICKEY().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link EMAILPUBLICKEY }
     * 
     * 
     */
    public List<EMAILPUBLICKEY> getEMAILPUBLICKEY() {
        if (emailpublickey == null) {
            emailpublickey = new ArrayList<EMAILPUBLICKEY>();
        }
        return this.emailpublickey;
    }

}
